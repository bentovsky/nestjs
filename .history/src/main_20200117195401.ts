import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from './mongooseGlobals';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
