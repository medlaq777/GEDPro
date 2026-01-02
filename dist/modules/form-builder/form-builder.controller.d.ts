import { FormBuilderService } from './form-builder.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { SubmitFormDto } from './dto/submit-form.dto';
export declare class FormBuilderController {
    private readonly formBuilderService;
    constructor(formBuilderService: FormBuilderService);
    createTemplate(createTemplateDto: CreateTemplateDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/form-template.schema").FormTemplateDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/form-template.schema").FormTemplate & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAllTemplates(organizationId?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/form-template.schema").FormTemplateDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/form-template.schema").FormTemplate & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    submitForm(submitFormDto: SubmitFormDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/form-submission.schema").FormSubmissionDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/form-submission.schema").FormSubmission & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
