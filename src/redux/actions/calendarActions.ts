import { CalendarActionsTypes, calendarTypes } from '../types/calendarTypes'
import { ICalendarEvent } from '../../models/calendarEvent'

export const addNew = () => ({
  type: calendarTypes.ADD_NEW,
  payload: null
})

export const setActive = (event: ICalendarEvent): CalendarActionsTypes => ({
  type: calendarTypes.SET_ACTIVE,
  payload: event
})