import express from 'express';
import routes from './routes';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());

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