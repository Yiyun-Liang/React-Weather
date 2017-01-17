var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

//facebook.github.io/react/docs/component-specs.html
var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;

    var modalMarkup = (
      <div id='error-modal' className='reveal tiny text-center' data-reveal>
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className='button' data-close=''>Okay</button>
        </p>
      </div>
    );

    // add this markup into DOM
    var $modal = $(ReactDOMServer.renderToString(modalMarkup)); //convert to string
    // add to DOM
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){

    // minimum
    // start with no DOM
    // since foundation tries to manipulate with DOM when calling modal.open()
    // react does not work well with third party library updating dom like that
    return(
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
