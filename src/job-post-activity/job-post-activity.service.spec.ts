import { Test, TestingModule } from '@nestjs/testing';
import { JobPostActivityService } from './job-post-activity.service';

describe('JobPostActivityService', () => {
  let service: JobPostActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobPostActivityService],
    }).compile();

    service = module.get<JobPostActivityService>(JobPostActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
