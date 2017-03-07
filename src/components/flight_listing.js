import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteHeader from './route_header';
import RouteInfo from './route_info';

class FlightListing extends Component {

  renderOneWayFlights = () => {
    console.log(this.props.flights);
    const {
      type,
      origin,
      destination,
      all
    } = this.props.flights;

    if (type === 'one-way') {
      return (
        <div>
          <RouteHeader origin={origin} destination={destination} />
          {all.map(flight =>
            <RouteInfo
              key={flight.id}
              id={flight.id}
              code={flight.flight_code}
              departureDate={flight.departureDate}
              arrivalTime={flight.arrivalTime}
              destination={flight.destination}
              origin={flight.origin}
              fare={flight.fare}
            />
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
