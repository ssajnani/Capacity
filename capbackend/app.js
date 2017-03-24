//Import all the packages for the application
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//Use passport for authentication
var passport = require('passport');

//initialize mongoose schemas
require('./models/user');
require('./models/message');
require('./models/place');

//Generate variables for routes
var index = require('./routes/index');
var messages = require('./routes/messages');
var places = require('./routes/places');
var authenticate = require('./routes/authenticate')(passport);

var mongoose = require('mongoose');                         //add for Mongo support
mongoose.connect('mongodb://localhost/Capacity');        //connect to Mongo database

//Needed to connect express to the app
var app = express();

// view engine setup
app.use(express.static(__dirname + '/public'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));

//Secret keyword for password hashing
app.use(session({
  secret: 'keyboard cat'
}));

//use body parser to parse the json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Initialize authentication engine
app.use(passport.initialize());
app.use(passport.session());

//Redirect routes to the controllers
app.use('/auth', authenticate);
app.use('/messages', messages);
app.use('/places', places);
app.use('*', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// app.get('*', function(req, res){
//     res.sendfile('./public/index.html');
// });

//// Initialize Passport
var initPassport = require('./passport-init');
initPassport(passport);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
