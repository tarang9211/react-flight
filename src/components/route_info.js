import React, { PropTypes } from 'react';
import moment from 'moment';

const formatHourMinute = date => (
  moment(date).format('HH:mm')
);

const RouteInfo = ({ isReturn, id, code, departureDate,
  arrivalTime, destination, fare, origin }) => {
  if (isReturn) {
    return (
      <div>Placeholder</div>
    );
  }
  return (
    <div className="flight-list-item" key={id}>
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
  isReturn: PropTypes.bool,

  id: PropTypes.number,

  code: PropTypes.string,

  departureDate: PropTypes.func,

  arrivalTime: PropTypes.func,

  destination: PropTypes.string,

  origin: PropTypes.string,

  fare: PropTypes.string,
};

export default RouteInfo;
