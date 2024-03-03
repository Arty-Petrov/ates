import { Controller, Delete, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  public async register() {
    return this.service.create();
  }

  @Delete()
  public async delete() {
    return this.service.delete();
  }
}
