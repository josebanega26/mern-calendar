import { CalendarState } from "../../models/calendarState"

import moment from 'moment';
import { CalendarActionsTypes, calendarTypes } from "../types/calendarTypes";

const initialState: CalendarState = {
  events: [{
    title: 'Boss birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'By coffe',
    user: { name: 'Jose Banega', uid: '123abcd' }
  }],
  activeEvent: null
}

export default (state = initialState, { type, payload }: CalendarActionsTypes): CalendarState => {
  switch (type) {
    case calendarTypes.ADD_NEW: // TODO: FIX
      return { ...state, activeEvent: null }
    case calendarTypes.SET_ACTIVE:
      return { ...state, activeEvent: payload }
    default:
      return state
  }
}