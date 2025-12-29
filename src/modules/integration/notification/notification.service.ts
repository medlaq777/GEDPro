import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  constructor(private notificationGateway: NotificationGateway) {}

  @OnEvent('candidate.status_changed')
  handleCandidateStatusChange(payload: { candidateId: string; newStatus: string }) {
    this.notificationGateway.sendNotification('all', `Candidate ${payload.candidateId} moved to ${payload.newStatus}`);
  }
}
