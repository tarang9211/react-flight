import { combineReducers } from 'redux';
import OneWayReducer from './reducer_one_way_flight';

const rootReducer = combineReducers({
  onewaydata: OneWayReducer
});

export default rootReducer;
