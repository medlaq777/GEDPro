import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type FormSubmissionDocument = FormSubmission & Document;

@Schema({ timestamps: true })
export class FormSubmission {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'FormTemplate', required: true })
  templateId: string;

  @Prop({ type: Object, required: true })
  answers: Record<string, any>; // Key-value pairs matching template fields

  @Prop()
  candidateId: string; // If linked to a candidate

  @Prop()
  organizationId: string;
}

export const FormSubmissionSchema = SchemaFactory.createForClass(FormSubmission);
