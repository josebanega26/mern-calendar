export interface ICalendarEvent {
  title: string;
  start: Date;
  end: Date;
  bgcolor: string;
  notes: string;
  user?: { uid: string, name: string }
}