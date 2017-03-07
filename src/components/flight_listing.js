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
      arrivalTime,
      all
    } = this.props.flights;

    if (type === 'one-way') {
      return (
        <div>
          <div className="flight-listing-header">
            <div className="flight-listing-header-location">
              <h2>{origin} {destination}</h2>
            </div>
            <div className="flight-listing-header-dates">
              <p>Depart: {moment(departureDate).format('MMMM Do YYYY')}</p>
            </div>
          </div>
          {all.map(flight =>
            <div className="flight-list-item" key={flight.id}>
              <div className="flight-code-info">
                <span>{flight.flight_code}</span>
              </div>
              <div className="origin-info">
                <span className="block">{this.formatHourMinute(flight.departureDate)}
                </span>
                <small>{flight.origin}</small>
              </div>
              <div className="destination-info">
                <span className="block">{this.formatHourMinute(flight.arrivalTime)}
                </span>
                <small>{flight.destination}</small>
              </div>
              <div className="duration-info">
                <span>
                  2h 05m
                </span>
              </div>
              <div className="fare-info">
                {flight.fare}
              </div>
              <div className="actions">
                <button className="button-book">Book</button>
              </div>
            </div>
          )}
        </div>
      );
    } else if (type === 'return') {

    } else {

    }
  }

  formatHourMinute = date => (
    moment(date).format('HH:mm')
  )

  displayFlightTime = (departure, arrival) => {

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
