import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateExperienceDetailDto } from './dto/create-experience-detail.dto';
import { UpdateExperienceDetailDto } from './dto/update-experience-detail.dto';
import { ExperienceDetail } from './entities/experience-detail.entity';

@Injectable()
export class ExperienceDetailService {
  async create(createExperienceDetailDto: CreateExperienceDetailDto) {
    const {is_current_job, start_date, end_date,
      job_title, company_name, description} = createExperienceDetailDto

      const ExperienceRepo = getManager().getRepository(ExperienceDetail)
      const experience = ExperienceRepo.create({
        is_current_job,
        start_date,
        end_date,
        job_title,
        company_name,
        description
      })
      await ExperienceRepo.save(experience)
    return experience;
  }

  findAll() {
    return `This action returns all experienceDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experienceDetail`;
  }

  update(id: number, updateExperienceDetailDto: UpdateExperienceDetailDto) {
    return `This action updates a #${id} experienceDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} experienceDetail`;
  }
}
