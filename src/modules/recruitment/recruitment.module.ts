import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { RecruitmentService } from './recruitment.service';
import { RecruitmentController } from './recruitment.controller';
import { Candidate } from './entities/candidate.entity';
import { WorkflowHistory } from './entities/workflow-history.entity';
import { CandidateAnalysis, CandidateAnalysisSchema } from './schemas/candidate-analysis.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Candidate, WorkflowHistory]),
    MongooseModule.forFeature([{ name: CandidateAnalysis.name, schema: CandidateAnalysisSchema }]),
  ],
  providers: [RecruitmentService],
  controllers: [RecruitmentController],
  exports: [RecruitmentService],
})
export class RecruitmentModule {}
