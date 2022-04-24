import { PartialType } from '@nestjs/mapped-types';
import { CreateJobPostActivityDto } from './create-job-post-activity.dto';

export class UpdateJobPostActivityDto extends PartialType(CreateJobPostActivityDto) {}
