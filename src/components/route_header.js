import React, { PropTypes } from 'react';
import moment from 'moment';

const RouteHeader = ({ isReturn, origin, destination, departureDate }) => {
  if (isReturn) {
    return (
      <div>Hello</div>
    );
  }
  return (
    <div className="flight-listing-header">
      <div className="flight-listing-header-location">
        <h2>{origin} {destination}</h2>
      </div>
      <div className="flight-listing-header-dates">
        <p>Depart: {moment(departureDate).format('MMMM Do YYYY')}</p>
      </div>
    </div>
  );
};

RouteHeader.propTypes = {
  isReturn: PropTypes.bool,

  origin: PropTypes.string,

  destination: PropTypes.string,

  departureDate: PropTypes.func
};

export default RouteHeader;
