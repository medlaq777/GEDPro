"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DocumentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const document_metadata_entity_1 = require("./entities/document-metadata.entity");
const document_analysis_schema_1 = require("./schemas/document-analysis.schema");
const minio_storage_provider_1 = require("./providers/minio-storage.provider");
const tesseract_provider_1 = require("./providers/tesseract.provider");
let DocumentService = DocumentService_1 = class DocumentService {
    metaRepository;
    analysisModel;
    storageProvider;
    ocrService;
    logger = new common_1.Logger(DocumentService_1.name);
    constructor(metaRepository, analysisModel, storageProvider, ocrService) {
        this.metaRepository = metaRepository;
        this.analysisModel = analysisModel;
        this.storageProvider = storageProvider;
        this.ocrService = ocrService;
    }
    async processDocument(file, organizationId) {
        this.logger.log(`Uploading ${file.originalname}...`);
        const { url, key } = await this.storageProvider.upload(file.buffer, `org-${organizationId}/${Date.now()}-${file.originalname}`, file.mimetype);
        const metadata = this.metaRepository.create({
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            storageKey: key,
            url: url,
            organizationId,
        });
        const savedMeta = await this.metaRepository.save(metadata);
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
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = DocumentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(document_metadata_entity_1.DocumentMetadata)),
    __param(1, (0, mongoose_1.InjectModel)(document_analysis_schema_1.DocumentAnalysis.name)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mongoose_2.Model,
        minio_storage_provider_1.MinioStorageProvider,
        tesseract_provider_1.TesseractProvider])
], DocumentService);
//# sourceMappingURL=document.service.js.map