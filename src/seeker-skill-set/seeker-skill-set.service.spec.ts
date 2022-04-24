import { Test, TestingModule } from '@nestjs/testing';
import { SeekerSkillSetService } from './seeker-skill-set.service';

describe('SeekerSkillSetService', () => {
  let service: SeekerSkillSetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeekerSkillSetService],
    }).compile();

    service = module.get<SeekerSkillSetService>(SeekerSkillSetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
