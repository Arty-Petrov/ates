import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { ConfigFactory } from '@nestjs/config/dist/interfaces/config-factory.interface';
import { validateEnvironment } from '../validation';
import * as path from 'path';

export const getConfigModuleConfig = (
  ...args: Array<ConfigFactory>
): ConfigModuleOptions => ({
  cache: true,
  isGlobal: true,
  envFilePath: `${process.cwd()}/apps/${path.basename(__dirname)}/.env.${path.basename(__dirname)}`,
  expandVariables: true,
  load: [...args],
  validate: validateEnvironment,
});
