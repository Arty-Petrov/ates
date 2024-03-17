import { Event } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/tracker-client';
import { TaskProducer } from './task.producer';
import { UserService } from '../user/user.service';
@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly producer: TaskProducer,
    private readonly userService: UserService,
  ) {}
  public async create(dto: Omit<Prisma.TaskCreateInput, 'assigny'>) {
    const assigny = await this.userService.getRandomAssigny();
    const task = await this.prisma.task.create({
      data: { ...dto, assignyId: assigny.id },
    });
    const result = await this.producer.send(Event.TaskCreated, [task]);
    console.log(result);
    return task;
  }

  public async shuffle() {
    const currentTasks = await this.prisma.task.findMany({
      where: { isComplete: false },
    });
    const assignyIds = currentTasks
      .map((task) => task.assignyId)
      .filter((a, b) => a !== b);
    const shuffledTasks = await this.prisma.$transaction(
      currentTasks.map((task) =>
        this.prisma.task.update({
          where: { id: task.id },
          data: {
            assignyId:
              assignyIds[Math.floor(Math.random() * (assignyIds.length - 1))],
          },
        }),
      ),
    );
    const result = await this.producer.send(Event.TaskAssigned, shuffledTasks);
    console.log(result);
    return shuffledTasks;
  }

  public async complete(publicId: string) {
    const task = await this.prisma.task.update({
      where: { publicId },
      data: { isComplete: true },
    });
    const result = this.producer.send(Event.TaskCompleted, [task.publicId]);
    console.log(result);
    return task;
  }
}
