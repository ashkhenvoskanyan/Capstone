import { Test, TestingModule } from '@nestjs/testing';
import { SeekerProfileController } from './seeker-profile.controller';
import { SeekerProfileService } from './seeker-profile.service';

describe('SeekerProfileController', () => {
  let controller: SeekerProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeekerProfileController],
      providers: [SeekerProfileService],
    }).compile();

    controller = module.get<SeekerProfileController>(SeekerProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
