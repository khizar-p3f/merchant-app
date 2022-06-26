var config = require("nconf")
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Routes = require("./server/routes")
var Firebase=require('./server/middleware/firebase');
require('dotenv').config();

/**
 * middleware Config
 */
config.file('production', 'config/config.json');
config.file('development', 'config/development.json');

const middleware = require('./server/middleware');
const Scheduler = require('./server/scheduler');
//config.argv().env().file({ file: 'config/config.json' });

/** 
 * App Config
 */
var app = express();
app.set('base', '/');
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(middleware.getMysqlSource);
app.use(cookieParser('f3452adfc5'));
app.use(express.static(path.join(__dirname, 'dist')));

const isFirebaseEnabled=config.get();
if(isFirebaseEnabled.firebase){
  Firebase.initializeFirebase()
}

/*
  Application routing and Render path
*/
Routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

/**
 * Scheduler / Batch 
 */
if (process.env.mode !== 'development') {
  console.log("Running in production mode");
  Scheduler(middleware.mysqlConfig)
} else {
  console.log("Runningn in development env port: ", process.env.PORT);
}


/**
 * catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
  next(createError(404));
});



/**
 * Error handling
 */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || 3000;
app.listen(port);

process.on('unhandledRejection', (reason, p) => {
  console.error(reason);
  console.error(p);
}).on('uncaughtException', err => {
  console.error(err);
}).on('UnhandledPromiseRejectionWarning', err => {
  console.error(err);
})


module.exports = app;
