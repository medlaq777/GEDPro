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
exports.FormBuilderController = void 0;
const common_1 = require("@nestjs/common");
const form_builder_service_1 = require("./form-builder.service");
const create_template_dto_1 = require("./dto/create-template.dto");
const submit_form_dto_1 = require("./dto/submit-form.dto");
const swagger_1 = require("@nestjs/swagger");
let FormBuilderController = class FormBuilderController {
    formBuilderService;
    constructor(formBuilderService) {
        this.formBuilderService = formBuilderService;
    }
    createTemplate(createTemplateDto) {
        if (!createTemplateDto.organizationId) {
            createTemplateDto.organizationId = 'default';
        }
        return this.formBuilderService.createTemplate(createTemplateDto);
    }
    findAllTemplates(organizationId = 'default') {
        return this.formBuilderService.findAllTemplates(organizationId);
    }
    submitForm(submitFormDto) {
        if (!submitFormDto.organizationId) {
            submitFormDto.organizationId = 'default';
        }
        return this.formBuilderService.submitForm(submitFormDto);
    }
};
exports.FormBuilderController = FormBuilderController;
__decorate([
    (0, common_1.Post)('templates'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new form template' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_template_dto_1.CreateTemplateDto]),
    __metadata("design:returntype", void 0)
], FormBuilderController.prototype, "createTemplate", null);
__decorate([
    (0, common_1.Get)('templates'),
    (0, swagger_1.ApiOperation)({ summary: 'List templates for an organization' }),
    __param(0, (0, common_1.Query)('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormBuilderController.prototype, "findAllTemplates", null);
__decorate([
    (0, common_1.Post)('submit'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit a form response' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [submit_form_dto_1.SubmitFormDto]),
    __metadata("design:returntype", void 0)
], FormBuilderController.prototype, "submitForm", null);
exports.FormBuilderController = FormBuilderController = __decorate([
    (0, swagger_1.ApiTags)('Form Builder'),
    (0, common_1.Controller)('forms'),
    __metadata("design:paramtypes", [form_builder_service_1.FormBuilderService])
], FormBuilderController);
//# sourceMappingURL=form-builder.controller.js.map