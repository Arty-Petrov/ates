import { KafkaModule, KafkaService } from '@app/kafka';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import {
  getConfigModuleConfig,
  getKafkaModuleConfig,
  getPrismaModuleConfig,
  KAFKA_SERVICE,
  kafkaModuleOption,
  prismaModuleOption,
} from '../common/config';
import { AuthModule } from './auth/auth.module';
import { OAuthModule } from './oauth/oauth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      getConfigModuleConfig(prismaModuleOption, kafkaModuleOption),
    ),
    KafkaModule.registerAsync([KAFKA_SERVICE], getKafkaModuleConfig()),
    PrismaModule.forRootAsync(getPrismaModuleConfig()),
    AuthModule,
    UserModule,
    OAuthModule,
  ],
  providers: [],
})
export class AppModule {}
