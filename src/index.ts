import * as express from "express";
import { Application } from 'express';
import Routes from "./routes";
import * as bodyParser from "body-parser";
import * as http from 'http';
import debug = require("debug");

class Server {
  private server: any;

  public getServerInstance(): any {
    return this.server;
  }

  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(bodyParser.json());
    this.server = http.createServer(app);
    this.server.listen(3000);
  }
}

export default new Server(express());

process.on("beforeExit", function (err) {
  console.error(err);
});