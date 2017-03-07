import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import { airports } from '../data';
import { styles, matchStateToTerm } from '../utils';
import { fetchOneWayFlights, fetchReturnFlights } from '../actions/index';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originCity: '',
      destinationCity: '',
      departureDate: moment(),
      returnDate: moment()
    };

    this.destinations = [];
  }

  handleOriginCityChange = (event, value) => {
    this.setState({ originCity: value });
  }

  handleOriginSelect = (value) => {
    this.setState({ originCity: value });
    this.destinations = airports.filter(item => item.name !== value);
  }

  handleDestinationCityChange = (event, value) => {
    this.setState({ destinationCity: value });
  }

  handleDestinationCitySelect = (value) => {
    this.setState({ destinationCity: value });
  }

  handleDepartureDateChange = (date) => {
    this.setState({ departureDate: date });
  }

  handleOneWaySearch = () => {
    const { originCity, destinationCity, departureDate, returnDate } = this.state;

    // pass data to action creator
    this.props.fetchOneWayFlights({
      type: 'one-way',
      originCity,
      destinationCity,
      departureDate,
      returnDate
    });
  }

  handleReturnDateChange= (date) => {
    this.setState({ returnDate: date });
  }

  handleReturnSearch = () => {
    const { originCity, destinationCity, departureDate, returnDate } = this.state;

    // pass data to action creator
    this.props.fetchReturnFlights({
      type: 'return',
      originCity,
      destinationCity,
      departureDate,
      returnDate
    });
  }

  render() {
    return (
      <div className="search-wrapper">
        <Tabs>
          <TabList>
            <Tab>One Way</Tab>
            <Tab>Return</Tab>
          </TabList>

          <TabPanel>
            {/* Autocomplete component for selecting origin city */}
            <div className="origin-input-selector">
              <Autocomplete
                autoHighlight
                value={this.state.originCity}
                items={airports}
                onChange={this.handleOriginChange}
                onSelect={this.handleOriginSelect}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.abbr}
                  >{item.name}
                  </div>
                  )}
                getItemValue={item => item.name}
                shouldItemRender={matchStateToTerm}
              />
            </div>

            {/* Autocomplete for component for selecting destination city */}
            <div className="destination-input-selector">
              <Autocomplete
                autoHighlight
                value={this.state.destinationCity}
                items={this.destinations}
                onChange={this.handleDestinationCityChange}
                onSelect={this.handleDestinationCitySelect}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.abbr}
                  >{item.name}
                  </div>
                  )}
                getItemValue={item => item.name}
                shouldItemRender={matchStateToTerm}
              />
            </div>

            {/* departure date datepicker component */}
            <div>
              <Datepicker
                onChange={this.handleDepartureDateChange}
                selected={this.state.departureDate}
                placeholder="Select departure date"
              />
            </div>

            {/* return date datepicker component */}
            <div>
              <Datepicker
                onChange={this.handleReturnDateChange}
                selected={this.state.returnDate}
                placeholder="Select return date"
              />
            </div>

            <div>
              <button onClick={this.handleOneWaySearch} className="button one-way-search-button">Search</button>
            </div>
          </TabPanel>
          <TabPanel>

            {/* Autocomplete component for selecting origin city */}
            <div className="origin-input-selector">
              <Autocomplete
                autoHighlight
                value={this.state.originCity}
                items={airports}
                onChange={this.handleOriginChange}
                onSelect={this.handleOriginSelect}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.abbr}
                  >{item.name}
                  </div>
                  )}
                getItemValue={item => item.name}
                shouldItemRender={matchStateToTerm}
              />
            </div>

            {/* Autocomplete for component for selecting destination city */}
            <div className="destination-input-selector">
              <Autocomplete
                autoHighlight
                value={this.state.destinationCity}
                items={this.destinations}
                onChange={this.handleDestinationCityChange}
                onSelect={this.handleDestinationCitySelect}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.abbr}
                  >{item.name}
                  </div>
                  )}
                getItemValue={item => item.name}
                shouldItemRender={matchStateToTerm}
              />
            </div>

            {/* departure date datepicker component */}
            <div>
              <Datepicker
                onChange={this.handleDepartureDateChange}
                selected={this.state.departureDate}
                placeholder="Select departure date"
              />
            </div>

            {/* return date datepicker component */}
            <div>
              <Datepicker
                onChange={this.handleReturnDateChange}
                selected={this.state.returnDate}
                placeholder="Select return date"
              />
            </div>

            <div>
              <button onClick={this.handleReturnSearch} className="button return-search-button">Search</button>
            </div>

          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default connect(null, {
  fetchOneWayFlights,
  fetchReturnFlights
})(Search);
