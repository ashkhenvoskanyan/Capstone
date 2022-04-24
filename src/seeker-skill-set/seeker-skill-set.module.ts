import { Module } from '@nestjs/common';
import { SeekerSkillSetService } from './seeker-skill-set.service';
import { SeekerSkillSetController } from './seeker-skill-set.controller';

@Module({
  controllers: [SeekerSkillSetController],
  providers: [SeekerSkillSetService]
})
export class SeekerSkillSetModule {}
