import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from '../config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configuration),
    UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
