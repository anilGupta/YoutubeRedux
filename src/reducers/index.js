import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import auth from './auth';

const rootReducer = combineReducers({ui, auth, routing: routerReducer });
export default rootReducer;