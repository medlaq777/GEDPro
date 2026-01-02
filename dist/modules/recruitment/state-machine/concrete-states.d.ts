import { CandidateStatus } from '../enums/candidate-status.enum';
import { CandidateState } from './candidate-state.base';
export declare class NewState extends CandidateState {
    status: CandidateStatus;
    allowedTransitions: CandidateStatus[];
    onEnter(): Promise<void>;
}
export declare class ScreeningState extends CandidateState {
    status: CandidateStatus;
    allowedTransitions: CandidateStatus[];
}
export declare class InterviewState extends CandidateState {
    status: CandidateStatus;
    allowedTransitions: CandidateStatus[];
}
export declare class OfferState extends CandidateState {
    status: CandidateStatus;
    allowedTransitions: CandidateStatus[];
}
export declare class HiredState extends CandidateState {
    status: CandidateStatus;
    allowedTransitions: never[];
}
export declare class RejectedState extends CandidateState {
    status: CandidateStatus;
    allowedTransitions: CandidateStatus[];
}
