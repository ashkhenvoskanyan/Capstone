import { Test, TestingModule } from '@nestjs/testing';
import { SeekerProfileService } from './seeker-profile.service';

describe('SeekerProfileService', () => {
  let service: SeekerProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeekerProfileService],
    }).compile();

    service = module.get<SeekerProfileService>(SeekerProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
