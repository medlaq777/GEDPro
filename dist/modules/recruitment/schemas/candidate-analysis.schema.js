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
exports.CandidateAnalysisSchema = exports.CandidateAnalysis = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let CandidateAnalysis = class CandidateAnalysis {
    candidateId;
    skills;
    experienceYears;
    rawAnalysis;
};
exports.CandidateAnalysis = CandidateAnalysis;
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], CandidateAnalysis.prototype, "candidateId", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], CandidateAnalysis.prototype, "skills", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], CandidateAnalysis.prototype, "experienceYears", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], CandidateAnalysis.prototype, "rawAnalysis", void 0);
exports.CandidateAnalysis = CandidateAnalysis = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], CandidateAnalysis);
exports.CandidateAnalysisSchema = mongoose_1.SchemaFactory.createForClass(CandidateAnalysis);
exports.CandidateAnalysisSchema.index({ skills: 1 });
//# sourceMappingURL=candidate-analysis.schema.js.map