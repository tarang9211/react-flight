import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteHeader from './route_header';
import RouteInfo from './route_info';
import ReturnFlightRouteInfo from './returnflight_route_info';

class FlightListing extends Component {

  renderOneWayFlights = () => {
    console.log(this.props.flights);
    const {
      type,
      origin,
      destination,
      all,
      departureDate,
      returnDate
    } = this.props.flights;

    if (type === 'one-way') {
      return (
        <div>
          <RouteHeader origin={origin} destination={destination} departureDate={departureDate} />
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
      return (
        <div>
          <RouteHeader
            isReturn
            origin={origin}
            destination={destination}
            departureDate={departureDate}
            returnDate={returnDate}
          />
          {all.map(flight =>
            <ReturnFlightRouteInfo
              key={flight.id}
              id={flight.id}
              routeOneCode={flight.route_one_code}
              routeTwoCode={flight.route_two_code}
              origin={flight.origin}
              destination={flight.destination}
              routeOneDeparture={flight.route_one_departure}
              routeOneArrival={flight.route_one_arrival}
              routeTwoDeparture={flight.route_two_departure}
              routeTwoArrival={flight.route_two_arrival}
              routeOneFare={flight.route_one_fare}
              routeTwoFare={flight.route_two_fare}
            />
          )}
        </div>
      );
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
