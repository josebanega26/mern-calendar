import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const middleware: any[] = [ReduxThunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
