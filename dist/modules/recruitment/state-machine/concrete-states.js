"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectedState = exports.HiredState = exports.OfferState = exports.InterviewState = exports.ScreeningState = exports.NewState = void 0;
const candidate_status_enum_1 = require("../enums/candidate-status.enum");
const candidate_state_base_1 = require("./candidate-state.base");
class NewState extends candidate_state_base_1.CandidateState {
    status = candidate_status_enum_1.CandidateStatus.NEW;
    allowedTransitions = [candidate_status_enum_1.CandidateStatus.SCREENING, candidate_status_enum_1.CandidateStatus.REJECTED];
    async onEnter() {
        console.log(`Candidate ${this.context.candidate.id} entered NEW state.`);
    }
}
exports.NewState = NewState;
class ScreeningState extends candidate_state_base_1.CandidateState {
    status = candidate_status_enum_1.CandidateStatus.SCREENING;
    allowedTransitions = [candidate_status_enum_1.CandidateStatus.INTERVIEW, candidate_status_enum_1.CandidateStatus.REJECTED];
}
exports.ScreeningState = ScreeningState;
class InterviewState extends candidate_state_base_1.CandidateState {
    status = candidate_status_enum_1.CandidateStatus.INTERVIEW;
    allowedTransitions = [candidate_status_enum_1.CandidateStatus.OFFER, candidate_status_enum_1.CandidateStatus.REJECTED];
}
exports.InterviewState = InterviewState;
class OfferState extends candidate_state_base_1.CandidateState {
    status = candidate_status_enum_1.CandidateStatus.OFFER;
    allowedTransitions = [candidate_status_enum_1.CandidateStatus.HIRED, candidate_status_enum_1.CandidateStatus.REJECTED];
}
exports.OfferState = OfferState;
class HiredState extends candidate_state_base_1.CandidateState {
    status = candidate_status_enum_1.CandidateStatus.HIRED;
    allowedTransitions = [];
}
exports.HiredState = HiredState;
class RejectedState extends candidate_state_base_1.CandidateState {
    status = candidate_status_enum_1.CandidateStatus.REJECTED;
    allowedTransitions = [candidate_status_enum_1.CandidateStatus.NEW];
}
exports.RejectedState = RejectedState;
//# sourceMappingURL=concrete-states.js.map