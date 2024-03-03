import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Post()
  public async create() {
    return this.service.create();
  }

  @Get()
  public async getOne() {
    return this.service.getOne();
  }

  @Post()
  public async findMany() {
    return this.service.findMany();
  }

  @Post()
  public async update() {
    return this.service.update();
  }

  @Delete()
  public async delete() {
    return this.service.delete();
  }
}
