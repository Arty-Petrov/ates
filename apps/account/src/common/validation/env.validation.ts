import { Expose, plainToInstance } from 'class-transformer';
import { IsString, Matches, validateSync } from 'class-validator';
import { DefaultValue } from '../decorator';

const DEFAULT_APP_HOST = 'localhost';
const DEFAULT_APP_PORT = '4000';
const DEFAULT_APP_GLOBAL_PREFIX = 'api';
const DEFAULT_APP_DOCUMENT_PREFIX = 'spec';

class EnvironmentsConfig {
  @Expose()
  @DefaultValue(DEFAULT_APP_HOST)
  @IsString()
  APP_HOST: string;

  @Expose()
  @DefaultValue(DEFAULT_APP_PORT)
  @IsString()
  @Matches(RegExp(/\d+/))
  APP_PORT: string;

  @Expose()
  @DefaultValue(DEFAULT_APP_GLOBAL_PREFIX)
  @IsString()
  APP_GLOBAL_PREFIX: string;

  @Expose()
  @DefaultValue(DEFAULT_APP_DOCUMENT_PREFIX)
  @IsString()
  APP_DOCUMENT_PREFIX: string;

  @IsString()
  PG_USER: string;

  @IsString()
  PG_PASSWORD: string;

  @IsString()
  PG_DB: string;

  @IsString()
  PG_HOST: string;

  @IsString()
  @Matches(RegExp(/\d+/))
  PG_PORT: string;

  @IsString()
  PG_SCHEMA: string;

  @IsString()
  PG_URL: string;

  @IsString()
  KAFKA_CLIENT_ID: string;

  @IsString()
  KAFKA_HOST: string;

  @IsString()
  @Matches(RegExp(/\d+/))
  KAFKA_PORT: string;

  @IsString()
  KAFKA_BROKER: string;

  @IsString()
  KAFKA_CONSUMER_GROUP_ID: string;
}

export function validateEnvironment(config: Record<string, unknown>) {
  console.log(`${__dirname}`);
  const environmentsConfig = plainToInstance(EnvironmentsConfig, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(environmentsConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentsConfig;
}
