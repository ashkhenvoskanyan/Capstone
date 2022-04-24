import { Test, TestingModule } from '@nestjs/testing';
import { JobPostActivityController } from './job-post-activity.controller';
import { JobPostActivityService } from './job-post-activity.service';

describe('JobPostActivityController', () => {
  let controller: JobPostActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobPostActivityController],
      providers: [JobPostActivityService],
    }).compile();

    controller = module.get<JobPostActivityController>(JobPostActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
