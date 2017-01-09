var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    return(
      <h3>It's -18 in Toronto.</h3>
    );
  }
});

module.exports = WeatherMessage;
