import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from './mongooseGlobals'

async function bootstrap() {
  console.log(process.env.PORT)
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  const test = mongoose
}
bootstrap();
