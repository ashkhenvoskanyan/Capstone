import { Test, TestingModule } from '@nestjs/testing';
import { ExperienceDetailController } from './experience-detail.controller';
import { ExperienceDetailService } from './experience-detail.service';

describe('ExperienceDetailController', () => {
  let controller: ExperienceDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienceDetailController],
      providers: [ExperienceDetailService],
    }).compile();

    controller = module.get<ExperienceDetailController>(ExperienceDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
