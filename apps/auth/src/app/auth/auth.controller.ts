import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('sign-in')
  public async signIn() {
    return this.service.signIn();
  }

  @Post('sign-out')
  public async signOut() {
    return this.service.signOut();
  }
  @Get('auth')
  public async authenticate() {
    return this.service.authenticate();
  }
}
