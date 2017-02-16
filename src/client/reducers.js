/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
//import app from './modules/App/AppReducer';
//import intl from './modules/Intl/IntlReducer';
import todo from './components/Todo/TodoReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  todo
});