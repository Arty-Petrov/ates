import { Controller, Get, Post } from '@nestjs/common';
import {
  OAuth,
  OAuth2ServerAuthenticate,
  OAuth2ServerAuthorize,
  OAuth2ServerOAuth,
  OAuth2ServerOptions,
  OAuth2ServerToken,
} from 'nest-oauth2-server';
import { OAuthService } from './oauth.service';

const authenticateHandler = {
  handle: function () {
    // Здесь мы должны получить пользователя из сессии
    return {};
  },
};

@Controller('oauth')
export class OAuthController {
  constructor(private readonly oauthService: OAuthService) {}

  @Get('user')
  @OAuth2ServerAuthenticate()
  user(@OAuth2ServerOAuth() oauth: OAuth) {
    return oauth.token?.user;
  }

  @Get('authorize')
  @OAuth2ServerOptions({ authenticateHandler })
  @OAuth2ServerAuthorize()
  authorize() {}

  @Post('token')
  @OAuth2ServerToken()
  token() {}
}
