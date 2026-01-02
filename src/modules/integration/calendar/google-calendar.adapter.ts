import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import { ICalendar, ICalendarEvent } from '../../../core/interfaces/calendar.interface';

@Injectable()
export class GoogleCalendarAdapter implements ICalendar {
  private logger = new Logger(GoogleCalendarAdapter.name);
  private calendar;
  private calendarId: string;

  constructor(private configService: ConfigService) {
    const keyFileContent = this.configService.get<string>('GOOGLE_PRIVATE_KEY');
    const clientEmail = this.configService.get<string>('GOOGLE_CLIENT_EMAIL');
    const projectId = this.configService.get<string>('GOOGLE_PROJECT_ID');
    this.calendarId = this.configService.get<string>('GOOGLE_CALENDAR_ID') || '';

    if (!keyFileContent || !clientEmail || !projectId || !this.calendarId) {
      this.logger.error('Google Calendar credentials not found in env.');
      return;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: keyFileContent.replace(/\\n/g, '\n'), // Handle escaped newlines
        project_id: projectId,
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    this.calendar = google.calendar({ version: 'v3', auth });
  }

  async createEvent(event: ICalendarEvent): Promise<string> {
    if (!this.calendar) {
      throw new Error('Google Calendar not configured');
    }

    try {
      const response = await this.calendar.events.insert({
        calendarId: this.calendarId,
        requestBody: {
          summary: event.title,
          start: { dateTime: event.start.toISOString() },
          end: { dateTime: event.end.toISOString() },
          attendees: event.attendees.map(email => ({ email })),
        },
      });

      this.logger.log(`Event created: ${response.data.id}`);
      return response.data.id;
    } catch (error) {
      this.logger.error(`Failed to create Google Calendar event: ${error.message}`);
      throw error;
    }
  }

  async updateEvent(eventId: string, event: ICalendarEvent): Promise<void> {
    if (!this.calendar) {
         this.logger.warn('Google Calendar not configured. Skipping updateEvent.');
         return;
    }

    try {
      await this.calendar.events.patch({
        calendarId: this.calendarId,
        eventId: eventId,
        requestBody: {
          summary: event.title,
          start: { dateTime: event.start.toISOString() },
          end: { dateTime: event.end.toISOString() },
          attendees: event.attendees.map(email => ({ email })),
        },
      });
      this.logger.log(`Event updated: ${eventId}`);
    } catch (error) {
      this.logger.error(`Failed to update Google Calendar event: ${error.message}`);
      throw error;
    }
  }

  async deleteEvent(eventId: string): Promise<void> {
    if (!this.calendar) {
        this.logger.warn('Google Calendar not configured. Skipping deleteEvent.');
        return;
    }

    try {
      await this.calendar.events.delete({
        calendarId: this.calendarId,
        eventId: eventId,
      });
      this.logger.log(`Event deleted: ${eventId}`);
    } catch (error) {
      this.logger.error(`Failed to delete Google Calendar event: ${error.message}`);
      throw error;
    }
  }
}
