import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlightListing extends Component {

  renderOneWayFlights = () => {
    console.log(this.props.flights);
  }

  render() {
    if (this.props.flights.all.length !== 0) {
      const { origin, destination } = this.props.flights.all[0];
      return (
        <div className="flight-listing-wrapper">
          <div className="flight-list">
            <div className="flight-list-header">
              {origin} &rang; {destination}
            </div>
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
