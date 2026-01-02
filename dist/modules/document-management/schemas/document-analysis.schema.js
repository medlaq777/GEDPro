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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentAnalysisSchema = exports.DocumentAnalysis = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let DocumentAnalysis = class DocumentAnalysis {
    documentId;
    fullText;
    keywords;
    metadata;
};
exports.DocumentAnalysis = DocumentAnalysis;
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], DocumentAnalysis.prototype, "documentId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DocumentAnalysis.prototype, "fullText", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], DocumentAnalysis.prototype, "keywords", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], DocumentAnalysis.prototype, "metadata", void 0);
exports.DocumentAnalysis = DocumentAnalysis = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], DocumentAnalysis);
exports.DocumentAnalysisSchema = mongoose_1.SchemaFactory.createForClass(DocumentAnalysis);
exports.DocumentAnalysisSchema.index({ fullText: 'text' });
//# sourceMappingURL=document-analysis.schema.js.map