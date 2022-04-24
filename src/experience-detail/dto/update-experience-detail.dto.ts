import { PartialType } from '@nestjs/mapped-types';
import { CreateExperienceDetailDto } from './create-experience-detail.dto';

export class UpdateExperienceDetailDto extends PartialType(CreateExperienceDetailDto) {}
