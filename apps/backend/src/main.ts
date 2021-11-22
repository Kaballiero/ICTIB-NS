/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as fs from 'fs';
import * as path from 'path';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const ssl = process.env.BACKEND_SSL === 'true' ? true : false;
  let httpsOptions = null;
  if (ssl) {
    const keyPath = '../../../certs/localhost/localhost.key';
    const certPath = '../../../certs/localhost/localhost.crt';
    httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, keyPath)),
      cert: fs.readFileSync(path.join(__dirname, certPath)),
    };
  }
  const app = await NestFactory.create(AppModule, { httpsOptions });
  const globalPrefix = '/';
  app.setGlobalPrefix(globalPrefix);
  const config = new DocumentBuilder()
    .setTitle('ictis-dunice-project')
    .setDescription('Описание backend для новой системы')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const hostname = process.env.HOSTNAME || 'localhost';
  await app.listen(5000, () => {
    const address = 'http' + (ssl ? 's' : '') + '://' + hostname + ':' + process.env.BACKEND_PORT + '/';
    Logger.log('Listening at ' + address);
  });
}

bootstrap();
