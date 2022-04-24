import { Module } from '@nestjs/common';
import { CompanyImageService } from './company-image.service';
import { CompanyImageController } from './company-image.controller';

@Module({
  controllers: [CompanyImageController],
  providers: [CompanyImageService]
})
export class CompanyImageModule {}
