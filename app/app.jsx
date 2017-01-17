var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// var Route = require('react-router').Route; in ES5
/*
var obj = {
  name: 'Isa'
};
var {name} = obj;
*/

// load foundation-sites
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// custom css -> scss
require('style!css!sass!applicationStyles');  // alias

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About}></Route>
      <Route path='examples' component={Examples}></Route>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
