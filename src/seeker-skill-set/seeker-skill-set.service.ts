import { Injectable } from '@nestjs/common';
import { CreateSeekerSkillSetDto } from './dto/create-seeker-skill-set.dto';
import { UpdateSeekerSkillSetDto } from './dto/update-seeker-skill-set.dto';

@Injectable()
export class SeekerSkillSetService {
  create(createSeekerSkillSetDto: CreateSeekerSkillSetDto) {
    return 'This action adds a new seekerSkillSet';
  }

  findAll() {
    return `This action returns all seekerSkillSet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seekerSkillSet`;
  }

  update(id: number, updateSeekerSkillSetDto: UpdateSeekerSkillSetDto) {
    return `This action updates a #${id} seekerSkillSet`;
  }

  remove(id: number) {
    return `This action removes a #${id} seekerSkillSet`;
  }
}
