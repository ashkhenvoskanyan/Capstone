import { Injectable } from '@nestjs/common';
import { SeekerProfile } from 'src/seeker-profile/entities/seeker-profile.entity';
import { getManager } from 'typeorm';
import { CreateSeekerSkillSetDto } from './dto/create-seeker-skill-set.dto';
import { UpdateSeekerSkillSetDto } from './dto/update-seeker-skill-set.dto';
import { SeekerSkillSet } from './entities/seeker-skill-set.entity';

@Injectable()
export class SeekerSkillSetService {
  async create(createSeekerSkillSetDto: CreateSeekerSkillSetDto) {
    const{skills, user_id} = createSeekerSkillSetDto;
    const SkillRepo = getManager().getRepository(SeekerSkillSet);
    const SeekerProfileRepo = getManager().getRepository(SeekerProfile)
    const seeker = await SeekerProfileRepo.findOne({id: user_id});
    Object.values(skills).forEach(async (skillName: string) => {
      const skill = {
        seeker,
        skills: skillName
      }
      SkillRepo.create(skill);
      await SkillRepo.save(skill);
    });
    return {status: "OK"}
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
