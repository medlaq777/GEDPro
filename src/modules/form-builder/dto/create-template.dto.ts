
import { IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsNotEmpty()
  fields: Record<string, any>[]; // Defines the structure of the form

  @IsString()
  @IsOptional()
  organizationId?: string;
}
