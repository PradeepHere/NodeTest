import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import { Application } from 'express';
import * as express from 'express';
import * as http from 'http';

export class BaseTest {
    chai: any;
    should: any;
    route: string;
    server: any;

    app: Application = express();

    constructor() {
        this.server = http.createServer(this.app);
        this.server.listen(3000);
        
        this.server.on('listening', () => {
            let address = this.server.address();
            let bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
        });
        this.chai = chai;
        this.chai.use(chaiHttp);
        this.should = chai.should();
    }
}