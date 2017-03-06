import React, { Component } from 'react';
import Search from './search';
import FlightListing from './flight_listing';

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Search />
        <FlightListing />
      </div>
    );
  }
}
