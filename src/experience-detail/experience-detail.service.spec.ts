import { Test, TestingModule } from '@nestjs/testing';
import { ExperienceDetailService } from './experience-detail.service';

describe('ExperienceDetailService', () => {
  let service: ExperienceDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperienceDetailService],
    }).compile();

    service = module.get<ExperienceDetailService>(ExperienceDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
