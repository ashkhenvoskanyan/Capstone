import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
import { JobPost } from './entities/job-post.entity';

@Injectable()
export class JobPostService {
  async create(createJobPostDto: CreateJobPostDto) {

    const {created_date, job_description, job_name} = createJobPostDto

    const JobRepo = getManager().getRepository(JobPost)
    const job = JobRepo.create({
      created_date, 
      job_description, 
      job_name
    })
    await JobRepo.save(job)
    return job
  }

  findAll() {
    return `This action returns all jobPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobPost`;
  }

  update(id: number, updateJobPostDto: UpdateJobPostDto) {
    return `This action updates a #${id} jobPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobPost`;
  }
}
