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
exports.FormBuilderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const form_template_schema_1 = require("./schemas/form-template.schema");
const form_submission_schema_1 = require("./schemas/form-submission.schema");
const event_emitter_1 = require("@nestjs/event-emitter");
let FormBuilderService = class FormBuilderService {
    templateModel;
    submissionModel;
    eventEmitter;
    constructor(templateModel, submissionModel, eventEmitter) {
        this.templateModel = templateModel;
        this.submissionModel = submissionModel;
        this.eventEmitter = eventEmitter;
    }
    async createTemplate(createTemplateDto) {
        const createdTemplate = new this.templateModel(createTemplateDto);
        return createdTemplate.save();
    }
    async findAllTemplates(organizationId) {
        return this.templateModel.find({ organizationId }).exec();
    }
    async submitForm(submissionDto) {
        const template = await this.templateModel.findById(submissionDto.templateId);
        if (!template) {
            throw new Error('Template not found');
        }
        this.validateAnswers(template.fields, submissionDto.answers);
        const submission = new this.submissionModel(submissionDto);
        const savedSubmission = await submission.save();
        this.eventEmitter.emit('form.submitted', {
            submissionId: savedSubmission._id,
            templateId: savedSubmission.templateId,
            answers: savedSubmission.answers,
            organizationId: savedSubmission.organizationId,
        });
        return savedSubmission;
    }
    validateAnswers(fields, answers) {
        for (const field of fields) {
            const answer = answers[field.key];
            if (field.required && (answer === undefined || answer === null || answer === '')) {
                throw new Error(`Field \"${field.label}\" is required`);
            }
            if (answer !== undefined && answer !== null) {
                if (field.type === 'number' && typeof answer !== 'number') {
                    throw new Error(`Field \"${field.label}\" must be a number`);
                }
                if (field.type === 'text' && typeof answer !== 'string') {
                    throw new Error(`Field \"${field.label}\" must be text`);
                }
            }
        }
    }
};
exports.FormBuilderService = FormBuilderService;
exports.FormBuilderService = FormBuilderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(form_template_schema_1.FormTemplate.name)),
    __param(1, (0, mongoose_1.InjectModel)(form_submission_schema_1.FormSubmission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        event_emitter_1.EventEmitter2])
], FormBuilderService);
//# sourceMappingURL=form-builder.service.js.map