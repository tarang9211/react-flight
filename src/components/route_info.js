import React, { PropTypes } from 'react';
import { formatHourMinute } from '../utils';

const RouteInfo = ({ code, departureDate,
  arrivalTime, destination, fare, origin }) => {
  return (
    <div className="flight-list-item">
      <div className="flight-code-info">
        <span>{code}</span>
      </div>
      <div className="origin-info">
        <span className="block">{formatHourMinute(departureDate)}
        </span>
        <small>{origin}</small>
      </div>
      <div className="destination-info">
        <span className="block">{formatHourMinute(arrivalTime)}
        </span>
        <small>{destination}</small>
      </div>
      <div className="duration-info">
        <span>
          2h 05m
        </span>
      </div>
      <div className="fare-info">
        {fare}
      </div>
      <div className="actions">
        <button className="button-book">Book</button>
      </div>
    </div>
  );
};

RouteInfo.propTypes = {

  code: PropTypes.string,

  departureDate: PropTypes.object,

  arrivalTime: PropTypes.object,

  destination: PropTypes.string,

  origin: PropTypes.string,

  fare: PropTypes.string,
};

export default RouteInfo;
