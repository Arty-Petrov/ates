import { Module } from '@nestjs/common';
import {
  OAuth2ServerModule,
  OAuth2ServerModuleOptions,
} from 'nest-oauth2-server';
import { OAuthService } from './oauth.service';

@Module({
  imports: [
    OAuth2ServerModule.forRootAsync({
      imports: [OAuthModule],
      useFactory: async (
        model: OAuthService,
      ): Promise<OAuth2ServerModuleOptions> =>
        ({
          model: model,
        }) as OAuth2ServerModuleOptions,
      inject: [OAuthService],
    }),
  ],
  exports: [OAuthService],
  providers: [OAuthService],
})
export class OAuthModule {}
