
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { SubmitFormDto } from './dto/submit-form.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Form Builder')
@Controller('forms')
export class FormBuilderController {
  constructor(private readonly formBuilderService: FormBuilderService) {}

  @Post('templates')
  @ApiOperation({ summary: 'Create a new form template' })
  createTemplate(@Body() createTemplateDto: CreateTemplateDto) {
    if (!createTemplateDto.organizationId) {
        createTemplateDto.organizationId = 'default';
    }
    return this.formBuilderService.createTemplate(createTemplateDto);
  }

  @Get('templates')
  @ApiOperation({ summary: 'List templates for an organization' })
  findAllTemplates(@Query('organizationId') organizationId: string = 'default') {
    return this.formBuilderService.findAllTemplates(organizationId);
  }

  @Post('submit')
  @ApiOperation({ summary: 'Submit a form response' })
  submitForm(@Body() submitFormDto: SubmitFormDto) {
    if (!submitFormDto.organizationId) {
        submitFormDto.organizationId = 'default';
    }
    return this.formBuilderService.submitForm(submitFormDto);
  }
}
