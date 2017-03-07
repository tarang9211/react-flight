import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class FlightListing extends Component {

  renderOneWayFlights = () => {
    console.log(this.props.flights);
    const {
      type,
      origin,
      destination,
      departureDate,
      returnDate,
      all
    } = this.props.flights;

    if (type === 'one-way') {
      return (
        <div>
          <div className="flight-listing-header">
            <div className="flight-listing-header-location">
              <p>{origin} {destination}</p>
            </div>
            <div className="flight-listing-header-dates">
              <p>Depart: {moment(departureDate).format('MMM Mo YYYY')}</p>
              <p>Return: {moment(returnDate).format('MMM Mo YYYY')}</p>
            </div>
          </div>
          {all.map(item =>
            <div className="flight-list-item">
              {item.origin}
            </div>
          )}
        </div>
      );
    } else if (type === 'return') {

    } else {

    }
  }

  render() {
    if (this.props.flights.all.length !== 0) {
      return (
        <div className="flight-listing-wrapper">
          <div className="flight-list">
            {this.renderOneWayFlights()}
          </div>
        </div>
      );
    }
    return (
      <div className="flight-listing-wrapper">
        Make a selection
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flights: state.flights
  };
}

export default connect(mapStateToProps)(FlightListing);
