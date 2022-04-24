import { Test, TestingModule } from '@nestjs/testing';
import { JobPostSkillsSetService } from './job-post-skills-set.service';

describe('JobPostSkillsSetService', () => {
  let service: JobPostSkillsSetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobPostSkillsSetService],
    }).compile();

    service = module.get<JobPostSkillsSetService>(JobPostSkillsSetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
