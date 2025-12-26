import { CandidateStatus } from '../enums/candidate-status.enum';
import { CandidateState } from './candidate-state.base'; // Corrected import path (remove .ts in real code usually, but tool handles filenames)

export class NewState extends CandidateState {
  status = CandidateStatus.NEW;
  // Logic: From NEW we can go to SCREENING or REJECTED
  allowedTransitions = [CandidateStatus.SCREENING, CandidateStatus.REJECTED];

  async onEnter(): Promise<void> {
    console.log(`Candidate ${this.context.candidate.id} entered NEW state.`);
  }
}

export class ScreeningState extends CandidateState {
  status = CandidateStatus.SCREENING;
  // Logic: From SCREENING to INTERVIEW or REJECTED
  allowedTransitions = [CandidateStatus.INTERVIEW, CandidateStatus.REJECTED];
}

export class InterviewState extends CandidateState {
  status = CandidateStatus.INTERVIEW;
  // Logic: From INTERVIEW to OFFER or REJECTED
  allowedTransitions = [CandidateStatus.OFFER, CandidateStatus.REJECTED];
}

export class OfferState extends CandidateState {
  status = CandidateStatus.OFFER;
  // Logic: From OFFER to HIRED or REJECTED (candidate declined)
  allowedTransitions = [CandidateStatus.HIRED, CandidateStatus.REJECTED];
}

export class HiredState extends CandidateState {
  status = CandidateStatus.HIRED;
  // End state
  allowedTransitions = [];
}

export class RejectedState extends CandidateState {
  status = CandidateStatus.REJECTED;
  // End state (or maybe allow reopening?)
  allowedTransitions = [CandidateStatus.NEW]; // Allow simple reopening for now
}
