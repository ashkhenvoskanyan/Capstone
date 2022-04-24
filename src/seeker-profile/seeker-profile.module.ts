import { Module } from '@nestjs/common';
import { SeekerProfileService } from './seeker-profile.service';
import { SeekerProfileController } from './seeker-profile.controller';

@Module({
  controllers: [SeekerProfileController],
  providers: [SeekerProfileService]
})
export class SeekerProfileModule {}
