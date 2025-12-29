import { Module } from '@nestjs/common';
import { GoogleCalendarAdapter } from './calendar/google-calendar.adapter';
import { NotificationGateway } from './notification/notification.gateway';
import { NotificationService } from './notification/notification.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [
    GoogleCalendarAdapter,
    NotificationGateway,
    NotificationService,
  ],
  exports: [GoogleCalendarAdapter, NotificationService],
})
export class IntegrationModule {}
