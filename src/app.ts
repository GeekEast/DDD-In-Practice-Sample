import 'reflect-metadata';

import { useContainer } from 'routing-controllers';
import { useExpressServer } from 'routing-controllers';
import express from 'express';
import path from 'path';
import { SERVICE_PORT } from './infrastructure/config/envs';
import { container } from './infrastructure/config/inversify.config';
import { Logger } from './infrastructure/util/logger.util';

useContainer(container);

const app = express();

useExpressServer(app, {
  controllers: [path.join(__dirname, '/controller/**/*.controller.js')],
});

app.listen(SERVICE_PORT, () => {
  Logger.info(
    `🚀 DDD sample project is running at http://localhost:${SERVICE_PORT}`
  );
});
