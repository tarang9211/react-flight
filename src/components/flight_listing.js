import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlightListing extends Component {
  render() {
    return (
      <div className="flight-listing-wrapper">
        Listing
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    onewaydata: state.onewaydata
  };
}

export default connect(mapStateToProps)(FlightListing);
