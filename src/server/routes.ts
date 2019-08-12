import * as path from 'path';
import { Express, static as ExpressStatic, Handler } from 'express';

export function configureRoutes(app: Express, authenticate: Handler) {
  app.get('/', authenticate, (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });

  app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
  });

  app.use('/scripts', ExpressStatic(path.join(__dirname, 'scripts')));
}
