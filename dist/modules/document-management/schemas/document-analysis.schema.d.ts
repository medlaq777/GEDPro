import { Document } from 'mongoose';
export type DocumentAnalysisDocument = DocumentAnalysis & Document;
export declare class DocumentAnalysis {
    documentId: string;
    fullText: string;
    keywords: string[];
    metadata: Record<string, any>;
}
export declare const DocumentAnalysisSchema: import("mongoose").Schema<DocumentAnalysis, import("mongoose").Model<DocumentAnalysis, any, any, any, Document<unknown, any, DocumentAnalysis, any, import("mongoose").DefaultSchemaOptions> & DocumentAnalysis & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, DocumentAnalysis>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DocumentAnalysis, Document<unknown, {}, DocumentAnalysis, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<DocumentAnalysis & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    documentId?: import("mongoose").SchemaDefinitionProperty<string, DocumentAnalysis, Document<unknown, {}, DocumentAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<DocumentAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fullText?: import("mongoose").SchemaDefinitionProperty<string, DocumentAnalysis, Document<unknown, {}, DocumentAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<DocumentAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    keywords?: import("mongoose").SchemaDefinitionProperty<string[], DocumentAnalysis, Document<unknown, {}, DocumentAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<DocumentAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, DocumentAnalysis, Document<unknown, {}, DocumentAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<DocumentAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, DocumentAnalysis>;
