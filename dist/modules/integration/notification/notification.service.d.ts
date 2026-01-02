import { NotificationGateway } from './notification.gateway';
export declare class NotificationService {
    private notificationGateway;
    constructor(notificationGateway: NotificationGateway);
    handleCandidateStatusChange(payload: {
        candidateId: string;
        newStatus: string;
    }): void;
}
