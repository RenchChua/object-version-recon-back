var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require('morgan');
var app     = express();
var port    = process.env.PORT || 1337;
var router  = express.Router();
var router = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(function(req, res, next) {
  res.header("ACCESS-CONTROL-ALLOW-ORIGIN","*");
  res.header("ACCESS-CONTROL-ALLOW-HEADERS","Origin, X-Requested-With, Content-Type, Accept");
  res.header("ACCESS-CONTROL-ALLOW-METHODS","*");

  next();
});


app.listen(port);
console.log('Server started on ' + port);

app.use('/', router);
