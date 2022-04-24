import { Test, TestingModule } from '@nestjs/testing';
import { SeekerSkillSetController } from './seeker-skill-set.controller';
import { SeekerSkillSetService } from './seeker-skill-set.service';

describe('SeekerSkillSetController', () => {
  let controller: SeekerSkillSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeekerSkillSetController],
      providers: [SeekerSkillSetService],
    }).compile();

    controller = module.get<SeekerSkillSetController>(SeekerSkillSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
