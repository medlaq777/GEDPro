export interface ICalendarEvent {
  title: string;
  start: Date;
  end: Date;
  attendees: string[];
}

export interface ICalendar {
  createEvent(event: ICalendarEvent): Promise<string>; // Returns event ID
  updateEvent(eventId: string, event: ICalendarEvent): Promise<void>;
  deleteEvent(eventId: string): Promise<void>;
}
