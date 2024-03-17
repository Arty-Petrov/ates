import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/tracker-client';
import { TaskController } from './task.controller';
import { TaskProducer } from './task.producer';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskProducer, PrismaClient],
})
export class TaskModule {}
