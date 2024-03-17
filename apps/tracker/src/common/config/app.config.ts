import { ConfigService } from '@nestjs/config';

export type AppConfig = {
  globalPrefix: string;
  documentPrefix: string;
  host: string;
  port: string;
};

export const getAppConfig = (configService: ConfigService): AppConfig => ({
  globalPrefix: configService.get('APP_GLOBAL_PREFIX'),
  documentPrefix: configService.get('APP_DOCUMENT_PREFIX'),
  host: configService.get('APP_HOST'),
  port: configService.get('APP_PORT'),
});
