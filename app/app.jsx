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

var Main = require('Main');
var Weather = require('Weather');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
