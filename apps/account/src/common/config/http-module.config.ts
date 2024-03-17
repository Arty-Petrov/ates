import { HttpModuleAsyncOptions } from '@nestjs/axios';
import { ConfigService, registerAs } from '@nestjs/config';

export const httpModuleOptions = registerAs('http-module', () => ({
  timeout: parseInt(process.env.HTTP_TIMEOUT, 10),
  maxRedirects: parseInt(process.env.HTTP_MAX_REDIRECTS, 10),
}));

export const getHttpModuleConfig = (): HttpModuleAsyncOptions => ({
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    timeout: configService.get<number>('http-module.timeout'),
    maxRedirects: configService.get<number>('http-module.maxRedirects'),
  }),
});
