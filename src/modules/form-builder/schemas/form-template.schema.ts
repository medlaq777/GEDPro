import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormTemplateDocument = FormTemplate & Document;

@Schema({ timestamps: true })
export class FormTemplate {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [Object], required: true }) // Array of field definitions
  fields: Record<string, any>[]; 
  // Example: { type: 'text', label: 'Name', required: true, key: 'name' }

  @Prop()
  organizationId: string;
}

export const FormTemplateSchema = SchemaFactory.createForClass(FormTemplate);
