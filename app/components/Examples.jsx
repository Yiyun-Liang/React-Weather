var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className='text-center'>Examples</h1>
      <p>Here are some examples to try out: </p>
      <ul>
        <li>
          <Link to='/?location=waterloo'>Waterloo</Link>
        </li>
        <li>
          <Link to='/?location=beijing'>Beijing</Link>
        </li>
        <li>
          <Link to='/?location=seattle'>Seattle</Link>
        </li>
        <li>
          <Link to='/?location=toronto'>Toronto</Link>
        </li>
      </ul>
    </div>
  );
};

module.exports = Examples;
