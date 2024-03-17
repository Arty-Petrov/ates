import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerModuleConfig = new DocumentBuilder()
  .setTitle('The "FitFriends" service')
  .setDescription('Gateway API')
  .setVersion('1.0')
  .build();
