import { ConfigService } from '@nestjs/config';
import { NotificationGateway } from './notification.gateway';
export declare class NotificationService {
    private readonly notificationGateway;
    private readonly configService;
    private transporter;
    private readonly logger;
    constructor(notificationGateway: NotificationGateway, configService: ConfigService);
    private initializeTransporter;
    sendEmail(to: string, subject: string, text: string): Promise<any>;
    handleCandidateStatusChange(payload: {
        candidateId: string;
        newStatus: string;
        candidateEmail?: string;
    }): Promise<void>;
}
