import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { DocumentMetadata } from './entities/document-metadata.entity';
import { DocumentAnalysisDocument } from './schemas/document-analysis.schema';
import { MinioStorageProvider } from './providers/minio-storage.provider';
import { TesseractProvider } from './providers/tesseract.provider';
export declare class DocumentService {
    private metaRepository;
    private analysisModel;
    private storageProvider;
    private ocrService;
    private logger;
    constructor(metaRepository: Repository<DocumentMetadata>, analysisModel: Model<DocumentAnalysisDocument>, storageProvider: MinioStorageProvider, ocrService: TesseractProvider);
    processDocument(file: any, organizationId: string): Promise<DocumentMetadata>;
}
