import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('register')
  public async register(@Body() dto: UserCreateDto) {
    return this.service.register(dto);
  }
}
