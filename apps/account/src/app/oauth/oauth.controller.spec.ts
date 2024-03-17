import { Test, TestingModule } from '@nestjs/testing';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';

describe('OauthController', () => {
  let controller: OAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OAuthController],
      providers: [OAuthService],
    }).compile();

    controller = module.get<OAuthController>(OAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
