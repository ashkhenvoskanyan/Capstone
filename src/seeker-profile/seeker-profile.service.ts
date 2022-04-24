import { Injectable } from '@nestjs/common';
import { CreateSeekerProfileDto } from './dto/create-seeker-profile.dto';
import { UpdateSeekerProfileDto } from './dto/update-seeker-profile.dto';

@Injectable()
export class SeekerProfileService {
  create(createSeekerProfileDto: CreateSeekerProfileDto) {
    return 'This action adds a new seekerProfile';
  }

  findAll() {
    return `This action returns all seekerProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seekerProfile`;
  }

  update(id: number, updateSeekerProfileDto: UpdateSeekerProfileDto) {
    return `This action updates a #${id} seekerProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} seekerProfile`;
  }
}
