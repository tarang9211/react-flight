import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Autocomplete from 'react-autocomplete';
import Datepicker from 'react-datepicker';
import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import { airports } from '../data';
import { styles, matchStateToTerm } from '../utils';

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

  handleOriginChange = (event, value) => {
    this.setState({ originCity: value });
  }

  handleOriginSelect = (value) => {
    this.setState({ originCity: value });
    this.destinations = airports.filter(item => item.name !== value);
  }

  handleDepartureDateChange = (date) => {
    console.log('departure date', date._d);
    this.setState({ departureDate: date._d });
  }

  handleOneWaySearch = (e) => {
    console.log(e);
  }

  handleReturnDateChange= (date) => {
    console.log('return date', date._d);
    this.setState({ returnDate: date._d });
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
                onChange={(event, value) => this.setState({ originCity: value })}
                onSelect={value => this.setState({ originCity: value })}
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
              <button onClick={this.handleOneWaySearch}>Button</button>
            </div>
          </TabPanel>
          <TabPanel>
            Return
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Search;
