import { Application } from 'express';
import ParseController from './controllers/parseController';

export default class Routes {

  parseCtrl = new ParseController();
    
  constructor(app: Application) {
    app.route('/api/v1/parse').post(this.parseCtrl.getV1ParsedValue);
    app.route('/api/v2/parse').post(this.parseCtrl.getV2ParsedValue);
  }
}
