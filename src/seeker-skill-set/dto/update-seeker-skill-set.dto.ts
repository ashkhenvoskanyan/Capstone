import { PartialType } from '@nestjs/mapped-types';
import { CreateSeekerSkillSetDto } from './create-seeker-skill-set.dto';

export class UpdateSeekerSkillSetDto extends PartialType(CreateSeekerSkillSetDto) {}
