var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// express middleware: do something with every request
// this needs to be above app.use(express.static)
// this may break localhost if if and else code are swapped
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next(); // let request process as normal in this case
  }
});

// default is index.html in public folder
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
