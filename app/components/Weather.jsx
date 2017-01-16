var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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

    // debugger; // like a breakpoint

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      // simply using this here not working - this binding is lost inside here...
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: 'Unable to fetch weather for that location'
      });
    });
  },
  render: function(){
    // ES6 destructuring
    var {isLoading, location, temp, errorMessage} = this.state;

    // conditionally renders components
    function renderMessage(){
      if(isLoading){
        return <h3 className='text-center'>Fetching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderErrorMessage(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    );
  }
});

module.exports = Weather;
