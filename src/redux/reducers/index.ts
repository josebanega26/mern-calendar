import { combineReducers } from 'redux';
import uiReducer from './uiReducer';

const reducer = combineReducers({
  ui: uiReducer,
});
export type RootState = ReturnType<typeof reducer>;
export const rootReducer = reducer;


