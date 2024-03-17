import { Task } from '@prisma/tracker-client';
import { IsString } from 'class-validator';

export class TaskCreateDto implements Pick<Task, 'description'> {
  @IsString()
  description: string;
}
