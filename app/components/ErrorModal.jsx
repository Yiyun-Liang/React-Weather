var React = require('react');

//facebook.github.io/react/docs/component-specs.html
var ErrorModal = React.createClass({
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return(
      <div id='error-modal' className='reveal tiny text-center' data-reveal>
        <h4>ERROR: </h4>
        <p>Our error message</p>
        <p>
          <button className='button' data-close=''>Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
