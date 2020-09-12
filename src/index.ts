import { Application } from "express";
import Routes from "./routes";
import * as bodyParser from "body-parser";
import * as http from 'http';

export default class Server {
    constructor(app: Application) {
      this.config(app);
      new Routes(app);
    }
  
    public config(app: Application): void {
        app.use(bodyParser.json());
    }
  }
  
  process.on("beforeExit", function (err) {
    console.error(err);
  });