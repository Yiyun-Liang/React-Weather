var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  // default when app loads, below is a built in function
  getInitialState: function(){
    return {
      location: 'Seattle',
      temp: 28
    }
  },
  handleSearch: function(location){
    var that = this;

    openWeatherMap.getTemp(location).then(function(temp){
      // simply using this here not working - this binding is lost inside here...
      that.setState({
        location: location,
        temp: temp
      });
    }, function(errMsg){
      alert(errMsg);
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
