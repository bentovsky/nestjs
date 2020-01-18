import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  console.log(process.env.PORT)
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log('test: ', mongoose);
}
bootstrap();
