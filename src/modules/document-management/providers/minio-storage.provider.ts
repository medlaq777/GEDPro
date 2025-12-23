import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';
import { IStorageProvider } from '../../../core/interfaces/storage-provider.interface';
import { Readable } from 'stream';

@Injectable()
export class MinioStorageProvider implements IStorageProvider {
  private minioClient: Minio.Client;
  private bucketName: string;
  private logger = new Logger(MinioStorageProvider.name);

  constructor(private configService: ConfigService) {
    this.minioClient = new Minio.Client({
      endPoint: this.configService.get('MINIO_ENDPOINT', 'localhost'),
      port: parseInt(this.configService.get('MINIO_PORT', '9000'), 10),
      useSSL: this.configService.get('MINIO_USE_SSL') === 'true',
      accessKey: this.configService.get('MINIO_ACCESS_KEY', 'minioadmin'),
      secretKey: this.configService.get('MINIO_SECRET_KEY', 'minioadmin'),
    });
    this.bucketName = this.configService.get('MINIO_BUCKET', 'documents');
    this.ensureBucket();
  }

  private async ensureBucket() {
    try {
      const exists = await this.minioClient.bucketExists(this.bucketName);
      if (!exists) {
        await this.minioClient.makeBucket(this.bucketName, 'us-east-1');
        this.logger.log(`Bucket ${this.bucketName} created`);
      }
    } catch (err) {
      this.logger.error(`Error checking/creating bucket: ${err.message}`);
    }
  }

  async upload(file: Buffer, path: string, mimeType: string): Promise<{ url: string; key: string }> {
    const key = path; // Using path as key
    await this.minioClient.putObject(this.bucketName, key, file, file.length, {
      'Content-Type': mimeType,
    });
    
    // Construct public URL (assuming configured)
    const protocol = this.configService.get('MINIO_USE_SSL') === 'true' ? 'https' : 'http';
    const host = this.configService.get('MINIO_ENDPOINT', 'localhost');
    const port = this.configService.get('MINIO_PORT', '9000');
    const url = `${protocol}://${host}:${port}/${this.bucketName}/${key}`;
    
    return { url, key };
  }

  async delete(key: string): Promise<void> {
    await this.minioClient.removeObject(this.bucketName, key);
  }

  async getSignedUrl(key: string): Promise<string> {
    return this.minioClient.presignedGetObject(this.bucketName, key, 24 * 60 * 60); // 24 hours
  }
}
