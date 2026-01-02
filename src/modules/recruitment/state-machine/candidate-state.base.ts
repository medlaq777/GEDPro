import { Candidate } from '../entities/candidate.entity';
import { CandidateStatus } from '../enums/candidate-status.enum';

export interface ICandidateContext {
  candidate: Candidate;
  // Add methods here if states need to trigger service actions, e.g. sendEmail
}

export abstract class CandidateState {
  abstract status: CandidateStatus;

  abstract allowedTransitions: CandidateStatus[];

  constructor(protected context: ICandidateContext) {}

  canTransitionTo(nextStatus: CandidateStatus): boolean {
    return this.allowedTransitions.includes(nextStatus);
  }

  // Hook for logic when entering this state
  async onEnter(): Promise<void> {
    // Default implementation: do nothing
  }

  // Hook for logic when exiting this state
  async onExit(): Promise<void> {
    // Default implementation: do nothing
  }
}
