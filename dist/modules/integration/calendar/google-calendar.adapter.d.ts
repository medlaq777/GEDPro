import { ConfigService } from '@nestjs/config';
import { ICalendar, ICalendarEvent } from '../../../core/interfaces/calendar.interface';
export declare class GoogleCalendarAdapter implements ICalendar {
    private configService;
    private logger;
    private calendar;
    private calendarId;
    constructor(configService: ConfigService);
    createEvent(event: ICalendarEvent): Promise<string>;
    updateEvent(eventId: string, event: ICalendarEvent): Promise<void>;
    deleteEvent(eventId: string): Promise<void>;
}
