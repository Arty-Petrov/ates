import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config({ path: '../.env.tracker' });
  const app = await NestFactory.create(AppModule);
  app.startAllMicroservices();
  await app.listen(4001);
}
bootstrap();
