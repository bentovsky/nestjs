import * as dotenv from "dotenv";

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {test} from './improvedMongoose'

dotenv.config();
test('hello')

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
