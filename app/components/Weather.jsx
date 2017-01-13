var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  // default when app loads, below is a built in function
  getInitialState: function(){
    return {
      location: 'Seattle',
      temp: 28
    }
  },
  handleSearch: function(location){
    this.setState({
      location: location,
      temp: -18
    });
  },
  render: function(){
    var {location, temp} = this.state;

    return(
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
