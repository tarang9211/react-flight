import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteHeader from './route_header';
import RouteInfo from './route_info';
import ReturnRouteInfo from './return_route_info';

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
            <div className="flight-list-item-return" key={flight.id}>
              <ReturnRouteInfo customClass="route_one" data={flight} />
              <ReturnRouteInfo customClass="route_two" data={flight} />
            </div>
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
