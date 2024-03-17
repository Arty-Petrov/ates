import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/account-client';
import { UserController } from './user.controller';
import { UserProducer } from './user.producer';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserProducer, PrismaClient],
})
export class UserModule {}
