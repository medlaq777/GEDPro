import { Candidate } from './candidate.entity';
import { CandidateStatus } from '../enums/candidate-status.enum';
export declare class WorkflowHistory {
    id: string;
    candidate: Candidate;
    previousStatus: CandidateStatus;
    newStatus: CandidateStatus;
    changedByUserId: string;
    notes: string;
    createdAt: Date;
}
