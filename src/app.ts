import 'reflect-metadata';

import { useContainer } from 'routing-controllers';
import { useExpressServer } from 'routing-controllers';
import { SERVICE_PORT } from './infrastructure/config/envs';
import { Logger } from './infrastructure/util/logger.util';
import compression from 'compression';
import express from 'express';
import path from 'path';
import Container from 'typedi';

useContainer(Container);

const app = express();

useExpressServer(app, {
  controllers: [path.join(__dirname, '/controller/**/*.controller.js')],
});

app.use(compression());

app.listen(SERVICE_PORT, () => {
  Logger.info(
    `🚀 DDD sample project is running at http://localhost:${SERVICE_PORT}`
  );
});
