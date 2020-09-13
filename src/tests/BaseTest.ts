import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import { Application } from 'express';
import * as express from 'express';
import Server from '../index'

export class BaseTest {
    chai: any;
    should: any;
    route: string;
    server: any;

    app: Application = express();

    constructor() {
        this.server = Server.getServerInstance();
        this.chai = chai;
        this.chai.use(chaiHttp);
        this.should = chai.should();
    }
}