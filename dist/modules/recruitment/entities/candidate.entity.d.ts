import { WorkflowHistory } from './workflow-history.entity';
import { CandidateStatus } from '../enums/candidate-status.enum';
export declare class Candidate {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    resumeUrl: string;
    status: CandidateStatus;
    organizationId: string;
    history: WorkflowHistory[];
    createdAt: Date;
    updatedAt: Date;
}
