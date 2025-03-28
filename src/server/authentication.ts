import * as Express from 'express';
import passport = require('passport');

export function configureAuthentication(app: Express.Application) {
  passport.serializeUser((user, done) => {
    done(null, JSON.stringify(user));
  });
  passport.deserializeUser((id, done) => {
    done(null, JSON.parse(<string>id));
  });

  app.use(passport.initialize());
  app.use(passport.session());

  const authenticate: Express.Handler = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
  return authenticate;
}
