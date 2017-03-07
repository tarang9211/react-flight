import React, { PropTypes } from 'react';
import moment from 'moment';

const formatDate = date => (
  moment(date).format('MMMM Do YYYY')
);

const RouteHeader = ({ isReturn, origin, destination, departureDate, returnDate }) => {
  if (isReturn) {
    return (
      <div className="flight-listing-header">
        <div className="flight-listing-header-location">
          <h2>{origin} {destination} {origin}</h2>
        </div>
        <div className="flight-listing-header-dates">
          <p>Depart: {formatDate(departureDate)}</p>
          <p>Return: {formatDate(returnDate)}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flight-listing-header">
      <div className="flight-listing-header-location">
        <h2>{origin} {destination}</h2>
      </div>
      <div className="flight-listing-header-dates">
        <p>Depart: {formatDate(departureDate)}</p>
      </div>
    </div>
  );
};

RouteHeader.propTypes = {
  isReturn: PropTypes.bool,

  origin: PropTypes.string,

  destination: PropTypes.string,

  departureDate: PropTypes.object,

  returnDate: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ])
};

export default RouteHeader;
