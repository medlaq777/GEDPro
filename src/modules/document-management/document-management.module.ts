import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DocumentMetadata } from './entities/document-metadata.entity';
import { DocumentAnalysis, DocumentAnalysisSchema } from './schemas/document-analysis.schema';
import { MinioStorageProvider } from './providers/minio-storage.provider';
import { TesseractProvider } from './providers/tesseract.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentMetadata]),
    MongooseModule.forFeature([{ name: DocumentAnalysis.name, schema: DocumentAnalysisSchema }]),
    ConfigModule,
  ],
  providers: [
    DocumentService,
    MinioStorageProvider,
    TesseractProvider,
  ],
  controllers: [DocumentController],
  exports: [DocumentService],
})
export class DocumentManagementModule {}
