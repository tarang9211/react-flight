import { FETCH_ONE_WAY, FETCH_RETURN } from '../actions/index';
import { flights } from '../data';

const INITIAL_STATE = { all: [] };

function filter(data) {
  console.log(data);
  const filteredResults = flights.filter(flight =>
    flight.type === data.type &&
    flight.origin === data.originCity &&
    flight.destination === data.destinationCity &&
    flight.departureDate >= data.departureDate
  );
  console.log('log from reducer: ', filteredResults);
  return filteredResults;
}

function returnfilter(data) {
  const filteredResults = flights.filter(flight =>
    flight.type === data.type &&
    flight.origin === data.originCity &&
    flight.destination === data.destinationCity &&
    flight.departureDate >= data.departureDate
  );
  console.log('log from reducer: ', filteredResults);
  return filteredResults;
}


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_ONE_WAY:
    return {
      ...state,
      all: filter(action.payload),
      type: 'one-way',
      departureDate: action.payload.departureDate,
      returnDate: action.payload.returnDate,
      origin: action.payload.originCity,
      destination: action.payload.destinationCity
    };
  case FETCH_RETURN:
    return {
      ...state,
      all: returnfilter(action.payload),
      type: 'return'
    };
  default:
    return state;
  }
}
