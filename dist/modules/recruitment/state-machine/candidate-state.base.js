"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateState = void 0;
class CandidateState {
    context;
    constructor(context) {
        this.context = context;
    }
    canTransitionTo(nextStatus) {
        return this.allowedTransitions.includes(nextStatus);
    }
    async onEnter() {
    }
    async onExit() {
    }
}
exports.CandidateState = CandidateState;
//# sourceMappingURL=candidate-state.base.js.map