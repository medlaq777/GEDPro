import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CandidateAnalysisDocument = CandidateAnalysis & Document;

@Schema({ timestamps: true })
export class CandidateAnalysis {
  @Prop({ required: true, index: true })
  candidateId: string;

  @Prop([String])
  skills: string[]; // Extracted skills

  @Prop()
  experienceYears: number; // Extracted years of experience

  @Prop({ type: Object })
  rawAnalysis: Record<string, any>;
}

export const CandidateAnalysisSchema = SchemaFactory.createForClass(CandidateAnalysis);
CandidateAnalysisSchema.index({ skills: 1 }); // Index for filtering
