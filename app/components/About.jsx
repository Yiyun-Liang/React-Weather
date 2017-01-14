var React = require('react');

var About1 = React.createClass({
  render: function(){
    return(
      <h1>About</h1>
    );
  }
});

// stateless functional component
// alternative for using only render function is defined like above

var About = (props) => {
  return(
    <h1>About Component</h1>
  );
};

module.exports = About;
