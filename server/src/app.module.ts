import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.models';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'ictib',
      models: [User],
      autoLoadModels:true,
    }),
  UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
