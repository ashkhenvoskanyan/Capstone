import { Injectable } from '@nestjs/common';
import { JobPost } from 'src/job-post/entities/job-post.entity';
import { getManager } from 'typeorm';
import { CreateJobPostSkillsSetDto } from './dto/create-job-post-skills-set.dto';
import { UpdateJobPostSkillsSetDto } from './dto/update-job-post-skills-set.dto';
import { JobPostSkillsSet } from './entities/job-post-skills-set.entity';

@Injectable()
export class JobPostSkillsSetService {
  async create(CreateJobPostSkillsSetDto: CreateJobPostSkillsSetDto) {
    const{skills, job_id} = CreateJobPostSkillsSetDto;
    const SkillRepo = getManager().getRepository(JobPostSkillsSet);
    const SeekerProfileRepo = getManager().getRepository(JobPost)
    const seeker = await SeekerProfileRepo.findOne({job_post_id: job_id});
    Object.values(skills).forEach(async (skillName: string) => {
      const skill = {
        seeker,
        skills: skillName
      }
      SkillRepo.create(skill);
      await SkillRepo.save(skill);
    });
  }
  findAll() {
    return `This action returns all jobPostSkillsSet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobPostSkillsSet`;
  }

  update(id: number, updateJobPostSkillsSetDto: UpdateJobPostSkillsSetDto) {
    return `This action updates a #${id} jobPostSkillsSet`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobPostSkillsSet`;
  }
}
