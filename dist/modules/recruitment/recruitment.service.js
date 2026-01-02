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
exports.RecruitmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const candidate_entity_1 = require("./entities/candidate.entity");
const candidate_status_enum_1 = require("./enums/candidate-status.enum");
const workflow_history_entity_1 = require("./entities/workflow-history.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const candidate_analysis_schema_1 = require("./schemas/candidate-analysis.schema");
const event_emitter_1 = require("@nestjs/event-emitter");
const concrete_states_1 = require("./state-machine/concrete-states");
let RecruitmentService = class RecruitmentService {
    candidateRepository;
    historyRepository;
    analysisModel;
    constructor(candidateRepository, historyRepository, analysisModel) {
        this.candidateRepository = candidateRepository;
        this.historyRepository = historyRepository;
        this.analysisModel = analysisModel;
    }
    async createCandidate(data) {
        const candidate = this.candidateRepository.create(data);
        return this.candidateRepository.save(candidate);
    }
    SKILL_DICTIONARY = {
        backend: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C#', '.NET', 'Go', 'Rust', 'PHP', 'Laravel'],
        frontend: ['React', 'Angular', 'Vue.js', 'Next.js', 'Nuxt', 'HTML', 'CSS', 'Sass', 'Tailwind', 'Redux', 'Zustand'],
        database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Supabase', 'Firebase'],
        devops: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
        tools: ['Git', 'Jira', 'Postman', 'Swagger', 'Figma', 'Trello'],
    };
    async extractSkills(candidateId, text) {
        const foundSkills = new Set();
        const normalizedText = text.toLowerCase();
        for (const [category, skills] of Object.entries(this.SKILL_DICTIONARY)) {
            for (const skill of skills) {
                const escapedSkill = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`(?:^|\\s|[.,;])(${escapedSkill})(?:$|\\s|[.,;])`, 'i');
                if (regex.test(text)) {
                    foundSkills.add(skill);
                }
            }
        }
        const skillsArray = Array.from(foundSkills);
        await this.analysisModel.create({
            candidateId,
            skills: skillsArray,
            experienceYears: 0,
            rawAnalysis: {
                sourceLength: text.length,
                detectedCategories: Object.keys(this.SKILL_DICTIONARY).filter(cat => this.SKILL_DICTIONARY[cat].some(s => skillsArray.includes(s)))
            },
        });
        return skillsArray;
    }
    async handleFormSubmission(payload) {
        if (payload.answers && payload.answers.email && payload.organizationId) {
            await this.createCandidate({
                email: payload.answers.email,
                fullName: payload.answers.fullName || 'Unknown',
                organizationId: payload.organizationId,
            });
        }
        else {
            console.warn('Form submission ignored: missing email or organizationId');
        }
    }
    async transitionStatus(candidateId, newStatus, userId, notes) {
        const candidate = await this.candidateRepository.findOne({ where: { id: candidateId } });
        if (!candidate)
            throw new common_1.BadRequestException('Candidate not found');
        const oldStatus = candidate.status;
        const currentState = this.getState(candidate.status, candidate);
        if (candidate.status === newStatus) {
            return candidate;
        }
        if (!currentState.canTransitionTo(newStatus)) {
            throw new common_1.BadRequestException(`Cannot transition from ${oldStatus} to ${newStatus}`);
        }
        await currentState.onExit();
        candidate.status = newStatus;
        const savedCandidate = await this.candidateRepository.save(candidate);
        const nextState = this.getState(newStatus, savedCandidate);
        await nextState.onEnter();
        const history = this.historyRepository.create({
            candidate: savedCandidate,
            previousStatus: oldStatus,
            newStatus: newStatus,
            changedByUserId: userId,
            notes,
        });
        await this.historyRepository.save(history);
        return savedCandidate;
    }
    getState(status, candidate) {
        const context = { candidate };
        switch (status) {
            case candidate_status_enum_1.CandidateStatus.NEW: return new concrete_states_1.NewState(context);
            case candidate_status_enum_1.CandidateStatus.SCREENING: return new concrete_states_1.ScreeningState(context);
            case candidate_status_enum_1.CandidateStatus.INTERVIEW: return new concrete_states_1.InterviewState(context);
            case candidate_status_enum_1.CandidateStatus.OFFER: return new concrete_states_1.OfferState(context);
            case candidate_status_enum_1.CandidateStatus.HIRED: return new concrete_states_1.HiredState(context);
            case candidate_status_enum_1.CandidateStatus.REJECTED: return new concrete_states_1.RejectedState(context);
            default: throw new Error(`Unknown state: ${status}`);
        }
    }
};
exports.RecruitmentService = RecruitmentService;
__decorate([
    (0, event_emitter_1.OnEvent)('form.submitted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecruitmentService.prototype, "handleFormSubmission", null);
exports.RecruitmentService = RecruitmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(candidate_entity_1.Candidate)),
    __param(1, (0, typeorm_1.InjectRepository)(workflow_history_entity_1.WorkflowHistory)),
    __param(2, (0, mongoose_1.InjectModel)(candidate_analysis_schema_1.CandidateAnalysis.name)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        mongoose_2.Model])
], RecruitmentService);
//# sourceMappingURL=recruitment.service.js.map