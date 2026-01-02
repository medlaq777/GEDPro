import { Candidate } from '../entities/candidate.entity';
import { CandidateStatus } from '../enums/candidate-status.enum';
export interface ICandidateContext {
    candidate: Candidate;
}
export declare abstract class CandidateState {
    protected context: ICandidateContext;
    abstract status: CandidateStatus;
    abstract allowedTransitions: CandidateStatus[];
    constructor(context: ICandidateContext);
    canTransitionTo(nextStatus: CandidateStatus): boolean;
    onEnter(): Promise<void>;
    onExit(): Promise<void>;
}
