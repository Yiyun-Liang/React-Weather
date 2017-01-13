var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  // default when app loads, below is a built in function
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(temp){
      // simply using this here not working - this binding is lost inside here...
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errMsg){
      that.setState({
        isLoading: false
      });
      alert(errMsg);
    });
  },
  render: function(){
    // ES6 destructuring
    var {isLoading, location, temp} = this.state;

    // conditionally renders components
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return(
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
