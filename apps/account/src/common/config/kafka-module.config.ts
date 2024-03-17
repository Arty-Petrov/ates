import { KafkaModuleOption, KafkaModuleOptionsAsync } from '@app/kafka';
import { ConfigService, registerAs } from '@nestjs/config';
import { Partitioners } from 'kafkajs';

export const KAFKA_SERVICE = 'kafka-service';

export const kafkaModuleOption = registerAs('kafka-module', () => ({
  clientId: process.env.KAFKA_CLIENT_ID,
  broker: process.env.KAFKA_BROKER,
  groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
}));

export const getKafkaModuleConfig = (): KafkaModuleOptionsAsync => ({
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<Array<KafkaModuleOption>> => [
    {
      name: KAFKA_SERVICE,
      options: {
        client: {
          clientId: configService.get<string>('kafka-module.clientId'),
          brokers: [configService.get<string>('kafka-module.broker')],
        },
        consumer: {
          groupId: configService.get<string>('kafka-module.groupId'),
        },
        producer: {
          createPartitioner: Partitioners.DefaultPartitioner,
        },
      },
    },
  ],
});
