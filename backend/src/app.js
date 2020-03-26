import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    this.server.use((req, res, next) => {
      console.log(`Metodo: ${req.method}`);
      console.log(`URL: ${req.url}`);

      return next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
