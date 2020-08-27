import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import calendarReducer from './calendarReducer';

const reducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer
});
export type RootState = ReturnType<typeof reducer>;
export const rootReducer = reducer;


