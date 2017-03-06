export const FETCH_ONE_WAY = 'FETCH_ONE_WAY';

export function fetchOneWayFlights(props) {
  const data = props;
  return {
    type: FETCH_ONE_WAY,
    payload: data
  };
}
