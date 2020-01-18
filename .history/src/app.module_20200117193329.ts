import * as dotenv from "dotenv";

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

dotenv.config();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
