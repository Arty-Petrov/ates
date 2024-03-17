import { KafkaMessageObject, KafkaService, SubscribeTo } from '@app/kafka';
import { Event } from '@app/shared';
import { Controller, Inject } from '@nestjs/common';
import { KAFKA_SERVICE } from '../../common/config';
import { UserService } from './user.service';
import { Payload } from '@nestjs/microservices';

@Controller()
export class UserConsumer {
  constructor(
    @Inject(KAFKA_SERVICE)
    private readonly brokerClient: KafkaService,
    private readonly userService: UserService,
  ) {}

  onModuleInit(): void {
    this.brokerClient.subscribeToResponseOf(Event.AccountRegistered, this);
  }

  @SubscribeTo(Event.AccountRegistered)
  async getWorld(@Payload() payload: KafkaMessageObject): Promise<void> {
    await this.userService.create(JSON.parse(payload));
  }
}
