import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly notificationGateway: NotificationGateway,
    private readonly configService: ConfigService,
  ) {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('MAIL_HOST'),
      port: Number(this.configService.get('MAIL_PORT')),
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.configService.get('MAIL_USER'),
        pass: this.configService.get('MAIL_PASS'),
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    try {
      const info = await this.transporter.sendMail({
        from: this.configService.get('MAIL_FROM'),
        to,
        subject,
        text,
      });
      this.logger.log(`Email sent: ${info.messageId}`);
      return info;
    } catch (error) {
      this.logger.error(`Failed to send email: ${error.message}`, error.stack);
      // Don't throw, just log. Notifications shouldn't break the main flow.
    }
  }

  @OnEvent('candidate.status_changed')
  async handleCandidateStatusChange(payload: { candidateId: string; newStatus: string; candidateEmail?: string }) {
    // websocket notification
    this.notificationGateway.sendNotification('all', `Candidate ${payload.candidateId} moved to ${payload.newStatus}`);
    
    // email notification (if candidate email is available or notify HR)
    const adminEmail = this.configService.get('MAIL_USER'); // Send to admin/HR for now as default
    await this.sendEmail(adminEmail, `Candidate Status Update: ${payload.newStatus}`, `Candidate ${payload.candidateId} has been moved to ${payload.newStatus}.`);
  }
}
