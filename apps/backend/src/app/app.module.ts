import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASS,
    database:  process.env.POSTGRES_DB,
    models: [],
    autoLoadModels:true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}