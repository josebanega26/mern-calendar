import { ICalendarEvent } from "../../models/calendarEvent";

export const calendarTypes = {
  SET_ACTIVE: '[CALENDAR] SetActive',
  ADD_NEW: '[CALENDAR] AddNew',
  DELETE_EVENT: '[CALENDAR] DeleteEvent'
};

export interface SetActive {
  type: typeof calendarTypes.SET_ACTIVE;
  payload: ICalendarEvent
}

export interface AddNew {
  type: typeof calendarTypes.ADD_NEW;
  payload: ICalendarEvent
}

export type CalendarActionsTypes = SetActive | AddNew
