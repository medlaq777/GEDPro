import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormBuilderService } from './form-builder.service';
import { FormBuilderController } from './form-builder.controller';
import { FormTemplate, FormTemplateSchema } from './schemas/form-template.schema';
import { FormSubmission, FormSubmissionSchema } from './schemas/form-submission.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FormTemplate.name, schema: FormTemplateSchema },
      { name: FormSubmission.name, schema: FormSubmissionSchema },
    ]),
  ],
  providers: [FormBuilderService],
  controllers: [FormBuilderController],
  exports: [FormBuilderService],
})
export class FormBuilderModule {}
