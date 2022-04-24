import { Injectable } from '@nestjs/common';
import { CreateJobPostSkillsSetDto } from './dto/create-job-post-skills-set.dto';
import { UpdateJobPostSkillsSetDto } from './dto/update-job-post-skills-set.dto';

@Injectable()
export class JobPostSkillsSetService {
  create(createJobPostSkillsSetDto: CreateJobPostSkillsSetDto) {
    return 'This action adds a new jobPostSkillsSet';
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
