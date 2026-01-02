import { Document, Schema as MongooseSchema } from 'mongoose';
export type FormSubmissionDocument = FormSubmission & Document;
export declare class FormSubmission {
    templateId: string;
    answers: Record<string, any>;
    candidateId: string;
    organizationId: string;
}
export declare const FormSubmissionSchema: MongooseSchema<FormSubmission, import("mongoose").Model<FormSubmission, any, any, any, Document<unknown, any, FormSubmission, any, import("mongoose").DefaultSchemaOptions> & FormSubmission & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, FormSubmission>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FormSubmission, Document<unknown, {}, FormSubmission, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormSubmission & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    templateId?: import("mongoose").SchemaDefinitionProperty<string, FormSubmission, Document<unknown, {}, FormSubmission, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormSubmission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    answers?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, FormSubmission, Document<unknown, {}, FormSubmission, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormSubmission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    candidateId?: import("mongoose").SchemaDefinitionProperty<string, FormSubmission, Document<unknown, {}, FormSubmission, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormSubmission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    organizationId?: import("mongoose").SchemaDefinitionProperty<string, FormSubmission, Document<unknown, {}, FormSubmission, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormSubmission & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, FormSubmission>;
