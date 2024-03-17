import { KafkaModule } from '@app/kafka';
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
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      getConfigModuleConfig(prismaModuleOption, kafkaModuleOption),
    ),
    KafkaModule.registerAsync([KAFKA_SERVICE], getKafkaModuleConfig()),
    PrismaModule.forRootAsync(getPrismaModuleConfig()),
    TaskModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
