var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className='text-center'>About</h1>
        <p>This is a weather application built on React. I have built this
        for the Complete React Web Developer Course.</p>
        <p>
          Here are some of the useful tools I've used:
        </p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a> - This was the
            JavaScript framework used.
          </li>
          <li>
            <a href='http://openweathermap.org'>Open Weather Map</a> - This was used to
            get weather data based on city names.
          </li>
        </ul>
      </div>
    );
  }
});

// stateless functional component
// alternative for using only render function is defined like above

var About1 = (props) => {
  return(
    <h1>About Component</h1>
  );
};

module.exports = About;
