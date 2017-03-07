export const FETCH_ONE_WAY = 'FETCH_ONE_WAY';
export const FETCH_RETURN = 'FETCH_RETURN';

export function fetchOneWayFlights(props) {
  const data = props;
  return {
    type: FETCH_ONE_WAY,
    payload: data
  };
}

export function fetchReturnFlights(props) {
  const data = props;
  return {
    type: FETCH_RETURN,
    payload: data
  };
}
