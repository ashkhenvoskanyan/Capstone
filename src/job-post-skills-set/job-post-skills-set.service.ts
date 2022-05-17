import { Injectable } from '@nestjs/common';
import { JobPost } from 'src/job-post/entities/job-post.entity';
import { getManager } from 'typeorm';
import { CreateJobPostSkillsSetDto } from './dto/create-job-post-skills-set.dto';
import { UpdateJobPostSkillsSetDto } from './dto/update-job-post-skills-set.dto';
import { JobPostSkillsSet } from './entities/job-post-skills-set.entity';

@Injectable()
export class JobPostSkillsSetService {
  async create(createJobPostSkillsSetDto: CreateJobPostSkillsSetDto) {
    const{skills, job_id} = createJobPostSkillsSetDto;
    const JobPostSkillsSetRepo = getManager().getRepository(JobPostSkillsSet);
    const JobPostRepo = getManager().getRepository(JobPost)
    const job = await JobPostRepo.findOne({id: job_id});
    Object.values(skills).forEach(async (skillName: string) => {
      const skill = {
        job,
        skills: skillName
      }
      JobPostSkillsSetRepo.create(skill);
      await JobPostSkillsSetRepo.save(skill);
    });
    return {status: "OK"}
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
