import { ICalendarEvent } from "../../models/calendarEvent";

export const calendarTypes = {
  SET_ACTIVE: '[CALENDAR] SetActive',
  ADD_NEW: '[CALENDAR] AddNew',
  DELETE_EVENT: '[CALENDAR] DeleteEvent',
  CLEAN_ACTIVE_EVENT: '[CALENDAR] CleanActiveEvent',
};

export interface SetActive {
  type: typeof calendarTypes.SET_ACTIVE;
  payload: ICalendarEvent
}

export interface AddNew {
  type: typeof calendarTypes.ADD_NEW;
  payload: ICalendarEvent
}

export interface CleanActiveEvent {
  type: typeof calendarTypes.CLEAN_ACTIVE_EVENT;
  payload: null
}

export type CalendarActionsTypes = SetActive | AddNew | CleanActiveEvent
