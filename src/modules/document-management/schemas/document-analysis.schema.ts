import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocumentAnalysisDocument = DocumentAnalysis & Document;

@Schema({ timestamps: true })
export class DocumentAnalysis {
  @Prop({ required: true, index: true }) // Index for fast lookup by documentId (SQL FK)
  documentId: string;

  @Prop()
  fullText: string;

  @Prop([String])
  keywords: string[];

  @Prop({ type: Object })
  metadata: Record<string, any>; // Confidence scores, page numbers, etc.
}

export const DocumentAnalysisSchema = SchemaFactory.createForClass(DocumentAnalysis);
DocumentAnalysisSchema.index({ fullText: 'text' }); // Enable text search
