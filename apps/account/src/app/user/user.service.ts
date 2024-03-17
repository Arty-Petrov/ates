import { Event } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { User, PrismaClient } from '@prisma/account-client';
import { UserProducer } from './user.producer';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly producer: UserProducer,
  ) {}
  public async register(dto: Omit<User, 'id' | 'publicId'>) {
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        role: dto.role,
      },
    });
    const result = await this.producer.send(Event.AccountRegistered, [user]);
    console.log(result);
    return user;
  }
}
