import * as express from 'express';
import { Application } from 'express';

import Server from './src/index';

const app: Application = express();
const server: any = Server.getServerInstance();
const port: number = 3000;

app.listen(port, 'localhost', () => {
  console.info(`Server running on : http://localhost:${port}`);
});