import { ConfigService, registerAs } from '@nestjs/config';
import { PrismaModuleAsyncOptions, PrismaServiceOptions } from 'nestjs-prisma';

export const prismaModuleOption = registerAs('prisma-module', () => ({
  databaseUrl: process.env.PG_URL,
}));

export const getPrismaModuleConfig = (): PrismaModuleAsyncOptions => ({
  inject: [ConfigService],
  isGlobal: true,
  useFactory: async (
    configService: ConfigService,
  ): Promise<PrismaServiceOptions> => ({
    prismaOptions: {
      datasources: {
        db: {
          url: configService.get<string>('prisma-module.databaseUrl'),
        },
      },
    },
  }),
});
