import { Document } from 'mongoose';
export type CandidateAnalysisDocument = CandidateAnalysis & Document;
export declare class CandidateAnalysis {
    candidateId: string;
    skills: string[];
    experienceYears: number;
    rawAnalysis: Record<string, any>;
}
export declare const CandidateAnalysisSchema: import("mongoose").Schema<CandidateAnalysis, import("mongoose").Model<CandidateAnalysis, any, any, any, Document<unknown, any, CandidateAnalysis, any, import("mongoose").DefaultSchemaOptions> & CandidateAnalysis & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, CandidateAnalysis>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CandidateAnalysis, Document<unknown, {}, CandidateAnalysis, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<CandidateAnalysis & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    candidateId?: import("mongoose").SchemaDefinitionProperty<string, CandidateAnalysis, Document<unknown, {}, CandidateAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<CandidateAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    skills?: import("mongoose").SchemaDefinitionProperty<string[], CandidateAnalysis, Document<unknown, {}, CandidateAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<CandidateAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    experienceYears?: import("mongoose").SchemaDefinitionProperty<number, CandidateAnalysis, Document<unknown, {}, CandidateAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<CandidateAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    rawAnalysis?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, CandidateAnalysis, Document<unknown, {}, CandidateAnalysis, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<CandidateAnalysis & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CandidateAnalysis>;
