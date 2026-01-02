import { Repository } from 'typeorm';
import { Candidate } from './entities/candidate.entity';
import { CandidateStatus } from './enums/candidate-status.enum';
import { WorkflowHistory } from './entities/workflow-history.entity';
import { Model } from 'mongoose';
import { CandidateAnalysisDocument } from './schemas/candidate-analysis.schema';
export declare class RecruitmentService {
    private candidateRepository;
    private historyRepository;
    private analysisModel;
    constructor(candidateRepository: Repository<Candidate>, historyRepository: Repository<WorkflowHistory>, analysisModel: Model<CandidateAnalysisDocument>);
    createCandidate(data: Partial<Candidate>): Promise<Candidate>;
    private readonly SKILL_DICTIONARY;
    extractSkills(candidateId: string, text: string): Promise<string[]>;
    handleFormSubmission(payload: any): Promise<void>;
    transitionStatus(candidateId: string, newStatus: CandidateStatus, userId: string, notes?: string): Promise<Candidate>;
    private getState;
}
