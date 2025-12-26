
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CandidateStatus } from '../enums/candidate-status.enum';

export class UpdateCandidateStatusDto {
  @IsEnum(CandidateStatus)
  @IsNotEmpty()
  status: CandidateStatus;

  @IsString()
  @IsOptional()
  notes?: string;
}
