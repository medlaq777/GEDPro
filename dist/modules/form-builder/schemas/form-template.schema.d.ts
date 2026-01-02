import { Document } from 'mongoose';
export type FormTemplateDocument = FormTemplate & Document;
export declare class FormTemplate {
    title: string;
    description: string;
    fields: Record<string, any>[];
    organizationId: string;
}
export declare const FormTemplateSchema: import("mongoose").Schema<FormTemplate, import("mongoose").Model<FormTemplate, any, any, any, Document<unknown, any, FormTemplate, any, import("mongoose").DefaultSchemaOptions> & FormTemplate & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, FormTemplate>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FormTemplate, Document<unknown, {}, FormTemplate, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormTemplate & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, FormTemplate, Document<unknown, {}, FormTemplate, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormTemplate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, FormTemplate, Document<unknown, {}, FormTemplate, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormTemplate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fields?: import("mongoose").SchemaDefinitionProperty<Record<string, any>[], FormTemplate, Document<unknown, {}, FormTemplate, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormTemplate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    organizationId?: import("mongoose").SchemaDefinitionProperty<string, FormTemplate, Document<unknown, {}, FormTemplate, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<FormTemplate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, FormTemplate>;
