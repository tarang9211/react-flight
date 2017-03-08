import React, { PropTypes } from 'react';
import { formatHourMinute } from '../utils';


const ReturnRouteInfo = ({ customClass, data }) => {
  const code = data[`${customClass}_code`];
  const { origin, destination } = data;
  const departure = data[`${customClass}_departure`];
  const arrival = data[`${customClass}_arrival`];
  const fare = data[`${customClass}_fare`];
  return (
    <div className={`flight-${customClass}-info`}>
      <div className={`${customClass}_code`}>
        <span>{code}</span>
      </div>
      <div className={`${customClass}_origin`}>
        <span className="block">{formatHourMinute(departure)}</span>
        <small>{origin}</small>
      </div>
      <div className={`${customClass}_destination`}>
        <span className="block">{formatHourMinute(arrival)}</span>
        <small>{destination}</small>
      </div>
      <div className={`${customClass}_fare`}>
        <span>{fare}</span>
      </div>
    </div>
  );
};

ReturnRouteInfo.propTypes = {
  customClass: PropTypes.string,

  data: PropTypes.object
};

export default ReturnRouteInfo;
