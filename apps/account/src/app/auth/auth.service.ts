import { KafkaService } from '@app/kafka';
import { Inject, Injectable } from '@nestjs/common';
import { RecordMetadata } from 'kafkajs';
import { KAFKA_SERVICE } from '../../common/config';

@Injectable()
export class AuthService {
  constructor(@Inject(KAFKA_SERVICE) private readonly client: KafkaService) {}
  public async signIn() {}
  public async signOut() {}
  public async post() {}
  async authenticate(
    message: string = 'Hello world',
  ): Promise<RecordMetadata[]> {
    console.log('service');
    const result = await this.client.send({
      topic: 'auth.check',
      messages: [
        {
          key: '1',
          value: message,
        },
      ],
    });
    console.log('send service', result);
    return result;
  }
}
