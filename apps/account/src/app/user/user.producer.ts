import { KafkaMessageObject, KafkaService } from '@app/kafka';
import { Event } from '@app/shared';
import { Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { KAFKA_SERVICE } from '../../common/config';

export class UserProducer {
  constructor(
    @Inject(KAFKA_SERVICE)
    private readonly brokerClient: KafkaService,
  ) {}
  public async send<T>(topic: Event, values: Array<T>) {
    const messages = values.map<KafkaMessageObject>((value) => ({
      key: randomUUID(),
      value: JSON.stringify(value),
      timestamp: new Date().getTime().toString(),
    }));
    const result = await this.brokerClient.send({
      topic: topic,
      messages: [...messages],
    });
    console.log(result);
    return result;
  }
}
