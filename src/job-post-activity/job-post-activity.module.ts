import { Module } from '@nestjs/common';
import { JobPostActivityService } from './job-post-activity.service';
import { JobPostActivityController } from './job-post-activity.controller';

@Module({
  controllers: [JobPostActivityController],
  providers: [JobPostActivityService]
})
export class JobPostActivityModule {}
