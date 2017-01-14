var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// express middleware: do something with every request
// this needs to be above app.use(express.static)
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next(); // let request process as normal in this case
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});

// default is index.html in public folder
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
