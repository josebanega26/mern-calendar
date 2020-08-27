import { ICalendarEvent } from './calendarEvent'

export interface CalendarState {
  events: ICalendarEvent[];
  activeEvent: ICalendarEvent | null;
}