import { PartialType } from '@nestjs/mapped-types';
import { CreateJobPostSkillsSetDto } from './create-job-post-skills-set.dto';

export class UpdateJobPostSkillsSetDto extends PartialType(CreateJobPostSkillsSetDto) {}
