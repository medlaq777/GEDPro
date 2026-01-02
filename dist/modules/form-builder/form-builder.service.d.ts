import { Model } from 'mongoose';
import { FormTemplate, FormTemplateDocument } from './schemas/form-template.schema';
import { FormSubmission, FormSubmissionDocument } from './schemas/form-submission.schema';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class FormBuilderService {
    private templateModel;
    private submissionModel;
    private eventEmitter;
    constructor(templateModel: Model<FormTemplateDocument>, submissionModel: Model<FormSubmissionDocument>, eventEmitter: EventEmitter2);
    createTemplate(createTemplateDto: any): Promise<import("mongoose").Document<unknown, {}, FormTemplateDocument, {}, import("mongoose").DefaultSchemaOptions> & FormTemplate & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAllTemplates(organizationId: string): Promise<(import("mongoose").Document<unknown, {}, FormTemplateDocument, {}, import("mongoose").DefaultSchemaOptions> & FormTemplate & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    submitForm(submissionDto: any): Promise<import("mongoose").Document<unknown, {}, FormSubmissionDocument, {}, import("mongoose").DefaultSchemaOptions> & FormSubmission & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    private validateAnswers;
}
