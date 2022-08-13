import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';

const options: cors.CorsOptions = {
    origin: '*'
};

class App {

    private expressApp: express.Application;
    
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.endpoints();
    }

    private middleware(): void {
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(cors(options));
    }

    private endpoints(): void {
        this.expressApp.post('/', (req, res) => {
            const data = req.body;
            console.log(data);
            res.send(data);
        });

        this.expressApp.get('/', (req, res) => {
            res.json({"JSON Response": "Hello, world!"});
        });
    }

    public getApp(): express.Application {
        return this.expressApp;
    }
}

export { App }