"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GoogleCalendarAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCalendarAdapter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const googleapis_1 = require("googleapis");
let GoogleCalendarAdapter = GoogleCalendarAdapter_1 = class GoogleCalendarAdapter {
    configService;
    logger = new common_1.Logger(GoogleCalendarAdapter_1.name);
    calendar;
    calendarId;
    constructor(configService) {
        this.configService = configService;
        const keyFileContent = this.configService.get('GOOGLE_PRIVATE_KEY');
        const clientEmail = this.configService.get('GOOGLE_CLIENT_EMAIL');
        const projectId = this.configService.get('GOOGLE_PROJECT_ID');
        this.calendarId = this.configService.get('GOOGLE_CALENDAR_ID') || '';
        if (!keyFileContent || !clientEmail || !projectId || !this.calendarId) {
            this.logger.error('Google Calendar credentials not found in env.');
            return;
        }
        const auth = new googleapis_1.google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: keyFileContent.replace(/\\n/g, '\n'),
                project_id: projectId,
            },
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });
        this.calendar = googleapis_1.google.calendar({ version: 'v3', auth });
    }
    async createEvent(event) {
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
        }
        catch (error) {
            this.logger.error(`Failed to create Google Calendar event: ${error.message}`);
            throw error;
        }
    }
    async updateEvent(eventId, event) {
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
        }
        catch (error) {
            this.logger.error(`Failed to update Google Calendar event: ${error.message}`);
            throw error;
        }
    }
    async deleteEvent(eventId) {
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
        }
        catch (error) {
            this.logger.error(`Failed to delete Google Calendar event: ${error.message}`);
            throw error;
        }
    }
};
exports.GoogleCalendarAdapter = GoogleCalendarAdapter;
exports.GoogleCalendarAdapter = GoogleCalendarAdapter = GoogleCalendarAdapter_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GoogleCalendarAdapter);
//# sourceMappingURL=google-calendar.adapter.js.map