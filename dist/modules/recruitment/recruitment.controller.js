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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruitmentController = void 0;
const common_1 = require("@nestjs/common");
const recruitment_service_1 = require("./recruitment.service");
const create_candidate_dto_1 = require("./dto/create-candidate.dto");
const update_candidate_status_dto_1 = require("./dto/update-candidate-status.dto");
const swagger_1 = require("@nestjs/swagger");
let RecruitmentController = class RecruitmentController {
    recruitmentService;
    constructor(recruitmentService) {
        this.recruitmentService = recruitmentService;
    }
    async createCandidate(createCandidateDto) {
        if (!createCandidateDto.organizationId) {
            createCandidateDto.organizationId = 'default';
        }
        return this.recruitmentService.createCandidate(createCandidateDto);
    }
    async findAll(req) {
        return { message: "List capability to be implemented in service" };
    }
    async updateStatus(id, updateDto, req) {
        const userId = req.user?.id || 'admin-test-user';
        return this.recruitmentService.transitionStatus(id, updateDto.status, userId, updateDto.notes);
    }
};
exports.RecruitmentController = RecruitmentController;
__decorate([
    (0, common_1.Post)('candidates'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new candidate' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidate_dto_1.CreateCandidateDto]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "createCandidate", null);
__decorate([
    (0, common_1.Get)('candidates'),
    (0, swagger_1.ApiOperation)({ summary: 'List all candidates' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('candidates/:id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update candidate status (State Machine)' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_candidate_status_dto_1.UpdateCandidateStatusDto, Object]),
    __metadata("design:returntype", Promise)
], RecruitmentController.prototype, "updateStatus", null);
exports.RecruitmentController = RecruitmentController = __decorate([
    (0, swagger_1.ApiTags)('Recruitment'),
    (0, common_1.Controller)('recruitment'),
    __metadata("design:paramtypes", [recruitment_service_1.RecruitmentService])
], RecruitmentController);
//# sourceMappingURL=recruitment.controller.js.map