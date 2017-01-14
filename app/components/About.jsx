var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <h1 className='text-center'>About</h1>
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
