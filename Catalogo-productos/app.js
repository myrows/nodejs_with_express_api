var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var categoriaRouter = require('./routes/categoria');
var comentarioRouter = require('./routes/comentario')
var clienteRouter = require('./routes/cliente')
const bodyParser = require('body-parser')
require('dotenv').config();
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const UserService = require('./services/user');
const customMdw = require('./middleware/custom');

passport.use(new LocalStrategy({
  usernameField: "username",
  passwordField: "password",
  session: false
}, (username, password, done) => {
  let data = UserService.findUser({username : username});
  if (data === undefined) return done(null, false);
  else if (!bcrypt.compareSync(password, data.password)) {
      return done(null, false);
  }
  return done(null, data);
}));

/** config de estrategia jwt de passport ******/
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  console.log("ejecutando *callback verify* de estategia jwt");
  let data = UserService.findById(jwt_payload.sub);
  if (data === null)
      return done(null, false);
  else
      return done(null, data);
}));


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1', usersRouter);
app.use('/api/v1', productosRouter);
app.use('/api/v1', categoriaRouter);
app.use('/api/v1', comentarioRouter);
app.use('/api/v1', clienteRouter);
app.use(customMdw.errorHandler);
app.use(customMdw.notFoundHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
