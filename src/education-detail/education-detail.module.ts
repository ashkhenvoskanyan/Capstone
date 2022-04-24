import { Module } from '@nestjs/common';
import { EducationDetailService } from './education-detail.service';
import { EducationDetailController } from './education-detail.controller';

@Module({
  controllers: [EducationDetailController],
  providers: [EducationDetailService]
})
export class EducationDetailModule {}
