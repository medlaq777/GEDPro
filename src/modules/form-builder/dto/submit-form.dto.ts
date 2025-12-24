
import { IsNotEmpty, IsString, IsObject, IsOptional } from 'class-validator';

export class SubmitFormDto {
  @IsString()
  @IsNotEmpty()
  templateId: string;

  @IsObject()
  @IsNotEmpty()
  answers: Record<string, any>;

  @IsString()
  @IsOptional()
  organizationId?: string; // Should be passed for data isolation
}
