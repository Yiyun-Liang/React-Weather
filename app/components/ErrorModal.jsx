var react = require('react');

var ErrorModal = React.createClass({
  render: function(){
    return(
      <div id='error-modal' className='reveal tiny text-center' data-reveal>
        <h4>ERROR: </h4>
        <p>Our error message</p>
        <p>
          <button className='button' data-close>Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;