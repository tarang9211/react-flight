import { FETCH_ONE_WAY } from '../actions/index';
import { flights } from '../data';

const INITIAL_STATE = { all: [] };

function filter(data) {
  const filteredResults = flights.filter(flight =>
    flight.type === data.type &&
    flight.origin === data.originCity &&
    flight.destination === data.destinationCity
  );
  return filteredResults;
}


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_ONE_WAY:
    return { ...state, all: filter(action.payload) };
  default:
    return state;
  }
}
