"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentManagementModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const document_service_1 = require("./document.service");
const document_controller_1 = require("./document.controller");
const document_metadata_entity_1 = require("./entities/document-metadata.entity");
const document_analysis_schema_1 = require("./schemas/document-analysis.schema");
const minio_storage_provider_1 = require("./providers/minio-storage.provider");
const tesseract_provider_1 = require("./providers/tesseract.provider");
const config_1 = require("@nestjs/config");
let DocumentManagementModule = class DocumentManagementModule {
};
exports.DocumentManagementModule = DocumentManagementModule;
exports.DocumentManagementModule = DocumentManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([document_metadata_entity_1.DocumentMetadata]),
            mongoose_1.MongooseModule.forFeature([{ name: document_analysis_schema_1.DocumentAnalysis.name, schema: document_analysis_schema_1.DocumentAnalysisSchema }]),
            config_1.ConfigModule,
        ],
        providers: [
            document_service_1.DocumentService,
            minio_storage_provider_1.MinioStorageProvider,
            tesseract_provider_1.TesseractProvider,
        ],
        controllers: [document_controller_1.DocumentController],
        exports: [document_service_1.DocumentService],
    })
], DocumentManagementModule);
//# sourceMappingURL=document-management.module.js.map