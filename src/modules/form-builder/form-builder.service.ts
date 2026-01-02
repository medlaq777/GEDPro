import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormTemplate, FormTemplateDocument } from './schemas/form-template.schema';
import { FormSubmission, FormSubmissionDocument } from './schemas/form-submission.schema';

import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class FormBuilderService {
  constructor(
    @InjectModel(FormTemplate.name) private templateModel: Model<FormTemplateDocument>,
    @InjectModel(FormSubmission.name) private submissionModel: Model<FormSubmissionDocument>,
    private eventEmitter: EventEmitter2,
  ) {}

  async createTemplate(createTemplateDto: any) {
    const createdTemplate = new this.templateModel(createTemplateDto);
    return createdTemplate.save();
  }

  async findAllTemplates(organizationId: string) {
    return this.templateModel.find({ organizationId }).exec();
  }

  async submitForm(submissionDto: any) {
    const template = await this.templateModel.findById(submissionDto.templateId);
    if (!template) {
      throw new Error('Template not found'); // Should use NotFoundException in real app
    }

    this.validateAnswers(template.fields, submissionDto.answers);

    const submission = new this.submissionModel(submissionDto);
    const savedSubmission = await submission.save();

    this.eventEmitter.emit('form.submitted', {
        submissionId: savedSubmission._id,
        templateId: savedSubmission.templateId,
        answers: savedSubmission.answers,
        organizationId: savedSubmission.organizationId,
    });

    return savedSubmission;
  }

  private validateAnswers(fields: any[], answers: Record<string, any>) {
    for (const field of fields) {
      const answer = answers[field.key];

      // 1. Check Required
      if (field.required && (answer === undefined || answer === null || answer === '')) {
        throw new Error(`Field \"${field.label}\" is required`); // BadRequestException ideally
      }

      // 2. Check Type (simplistic version)
      if (answer !== undefined && answer !== null) {
        if (field.type === 'number' && typeof answer !== 'number') {
           throw new Error(`Field \"${field.label}\" must be a number`);
        }
        if (field.type === 'text' && typeof answer !== 'string') {
            throw new Error(`Field \"${field.label}\" must be text`);
        }
        // Add more types as needed (date, email, etc.)
      }
    }
  }
}
