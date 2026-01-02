import { ConfigService } from '@nestjs/config';
import { IStorageProvider } from '../../../core/interfaces/storage-provider.interface';
export declare class MinioStorageProvider implements IStorageProvider {
    private configService;
    private minioClient;
    private bucketName;
    private logger;
    constructor(configService: ConfigService);
    private ensureBucket;
    upload(file: Buffer, path: string, mimeType: string): Promise<{
        url: string;
        key: string;
    }>;
    delete(key: string): Promise<void>;
    getSignedUrl(key: string): Promise<string>;
}
