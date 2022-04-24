import { Module } from '@nestjs/common';
import { JobPostSkillsSetService } from './job-post-skills-set.service';
import { JobPostSkillsSetController } from './job-post-skills-set.controller';

@Module({
  controllers: [JobPostSkillsSetController],
  providers: [JobPostSkillsSetService]
})
export class JobPostSkillsSetModule {}
