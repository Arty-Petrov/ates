import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app/app.module';

async function bootstrap() {
  config({ path: '../.env.account' });
  const app = await NestFactory.create(AppModule);
  app.startAllMicroservices();
  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
