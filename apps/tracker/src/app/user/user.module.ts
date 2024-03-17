import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserConsumer } from './user.consumer';
import { PrismaClient } from '@prisma/tracker-client';

@Module({
  controllers: [UserConsumer],
  providers: [UserService, PrismaClient],
})
export class UserModule {}
