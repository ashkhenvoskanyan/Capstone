import { Module } from '@nestjs/common';
import { ExperienceDetailService } from './experience-detail.service';
import { ExperienceDetailController } from './experience-detail.controller';

@Module({
  controllers: [ExperienceDetailController],
  providers: [ExperienceDetailService]
})
export class ExperienceDetailModule {}
