import { KafkaMessageObject, KafkaService } from '@app/kafka';
import { Event } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { KAFKA_SERVICE } from '../../common/config';
import { randomUUID } from 'crypto';

@Injectable()
export class TaskProducer {
  constructor(
    @Inject(KAFKA_SERVICE)
    private readonly brokerClient: KafkaService,
  ) {}
  public async send<T>(topic: Event, messageValues: Array<T>) {
    const messages = messageValues.map<KafkaMessageObject>((value) => ({
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
