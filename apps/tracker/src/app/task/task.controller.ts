import { Body, Controller, Param, Post } from '@nestjs/common';
import { TaskCreateDto } from './dto/task-create.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Post()
  public async create(@Body() dto: TaskCreateDto) {
    return this.service.create(dto);
  }

  @Post('shuffle')
  public async shuffle() {
    return this.service.shuffle();
  }

  @Post('comlete/:publicId')
  public async complete(@Param('publicId') publicId: string) {
    return this.service.complete(publicId);
  }
}
