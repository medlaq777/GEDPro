import { Injectable, Inject, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentMetadata } from './entities/document-metadata.entity';
import { DocumentAnalysis, DocumentAnalysisDocument } from './schemas/document-analysis.schema';
import { IStorageProvider } from '../../core/interfaces/storage-provider.interface'; // Updated path
import { IOCRService } from '../../core/interfaces/ocr-service.interface';
import { MinioStorageProvider } from './providers/minio-storage.provider';
import { TesseractProvider } from './providers/tesseract.provider';

@Injectable()
export class DocumentService {
  private logger = new Logger(DocumentService.name);

  constructor(
    @InjectRepository(DocumentMetadata)
    private metaRepository: Repository<DocumentMetadata>,
    @InjectModel(DocumentAnalysis.name)
    private analysisModel: Model<DocumentAnalysisDocument>,
    private storageProvider: MinioStorageProvider, // Concrete or Interface with Token
    private ocrService: TesseractProvider,
  ) {}

  async processDocument(file: any, organizationId: string) {
    // 1. Upload to MinIO
    this.logger.log(`Uploading ${file.originalname}...`);
    const { url, key } = await this.storageProvider.upload(file.buffer, `org-${organizationId}/${Date.now()}-${file.originalname}`, file.mimetype);

    // 2. Save Metadata (SQL)
    const metadata = this.metaRepository.create({
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      storageKey: key,
      url: url,
      organizationId,
    });
    const savedMeta = await this.metaRepository.save(metadata);

    // 3. OCR Analysis (Mongo) - Async? Or Sync?
    // Doing it sync for simplicity of basic flow, or fire and forget
    this.ocrService.extractText(file.buffer).then(async (text) => {
      this.logger.log(`OCR Complete for ${savedMeta.id}`);
      await this.analysisModel.create({
        documentId: savedMeta.id,
        fullText: text,
        keywords: [], 
        metadata: { confidence: 0.9 },
      });
    }).catch(err => this.logger.error('OCR Background task failed', err));

    return savedMeta;
  }
}
