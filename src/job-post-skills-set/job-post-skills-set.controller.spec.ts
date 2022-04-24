import { Test, TestingModule } from '@nestjs/testing';
import { JobPostSkillsSetController } from './job-post-skills-set.controller';
import { JobPostSkillsSetService } from './job-post-skills-set.service';

describe('JobPostSkillsSetController', () => {
  let controller: JobPostSkillsSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobPostSkillsSetController],
      providers: [JobPostSkillsSetService],
    }).compile();

    controller = module.get<JobPostSkillsSetController>(JobPostSkillsSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
