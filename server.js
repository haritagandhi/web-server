var express = require('express');
var app = express();
var PORT = 4000;

var middleware = require('./middleware.js');
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function (req,res){
  res.send('about page!');
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT,function(){
  console.log('express starting server on ' + PORT + '!!');
});
