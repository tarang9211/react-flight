import React, { PropTypes } from 'react';
import { formatHourMinute } from '../utils';

const ReturnFlightRouteInfo = ({ routeOneCode, routeTwoCode,
  origin, destination,
  routeOneDeparture, routeOneArrival,
  routeTwoDeparture, routeTwoArrival,
  routeOneFare, routeTwoFare }) => {
  return (
    <div className="flight-list-item-return">
      <div className="flight-route-one-info">
        <div className="route-one-code">
          <span>{routeOneCode}</span>
        </div>
        <div className="route-one-origin">
          <span className="block">{formatHourMinute(routeOneDeparture)}</span>
          <small>{origin}</small>
        </div>
        <div className="route-one-destination">
          <span className="block">{formatHourMinute(routeOneArrival)}</span>
          <small>{destination}</small>
        </div>
        <div className="route-one-fare">
          <span>{routeOneFare}</span>
        </div>
      </div>
      <div className="flight-route-two-info">
        <div className="route-two-code">
          <span>{routeTwoCode}</span>
        </div>
        <div className="route-two-origin">
          <span className="block">{formatHourMinute(routeTwoDeparture)}</span>
          <span>{destination}</span>
        </div>
        <div className="route-two-destination">
          <span className="block">{formatHourMinute(routeTwoArrival)}</span>
          <span>{origin}</span>
        </div>
        <div className="route-two-fare">
          <span>{routeTwoFare}</span>
        </div>
      </div>
    </div>
  );
};

ReturnFlightRouteInfo.propTypes = {

  routeOneCode: PropTypes.string,

  routeTwoCode: PropTypes.string,

  origin: PropTypes.string,

  destination: PropTypes.string,

  routeOneDeparture: PropTypes.object,

  routeOneArrival: PropTypes.object,

  routeTwoDeparture: PropTypes.object,

  routeTwoArrival: PropTypes.object,

  routeOneFare: PropTypes.string,

  routeTwoFare: PropTypes.string,

};

export default ReturnFlightRouteInfo;
