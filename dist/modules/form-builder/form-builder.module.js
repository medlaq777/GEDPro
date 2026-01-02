"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBuilderModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const form_builder_service_1 = require("./form-builder.service");
const form_builder_controller_1 = require("./form-builder.controller");
const form_template_schema_1 = require("./schemas/form-template.schema");
const form_submission_schema_1 = require("./schemas/form-submission.schema");
let FormBuilderModule = class FormBuilderModule {
};
exports.FormBuilderModule = FormBuilderModule;
exports.FormBuilderModule = FormBuilderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: form_template_schema_1.FormTemplate.name, schema: form_template_schema_1.FormTemplateSchema },
                { name: form_submission_schema_1.FormSubmission.name, schema: form_submission_schema_1.FormSubmissionSchema },
            ]),
        ],
        providers: [form_builder_service_1.FormBuilderService],
        controllers: [form_builder_controller_1.FormBuilderController],
        exports: [form_builder_service_1.FormBuilderService],
    })
], FormBuilderModule);
//# sourceMappingURL=form-builder.module.js.map