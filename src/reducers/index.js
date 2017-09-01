import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import auth from './auth';
import channel from './channel';

const rootReducer = combineReducers({ui, auth, channel, routing: routerReducer });
export default rootReducer;