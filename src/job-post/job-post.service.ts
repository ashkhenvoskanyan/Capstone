import { Injectable } from '@nestjs/common';
import { setgroups } from 'process';
import { Company } from 'src/company/entities/company.entity';
import { getManager } from 'typeorm';
import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
import { JobPost } from './entities/job-post.entity';

@Injectable()
export class JobPostService {
  async create(createJobPostDto: CreateJobPostDto) {

    const {created_date, job_description, job_name, companyId, locationId, typeId} = createJobPostDto

    const JobRepo = getManager().getRepository(JobPost)
    const job = JobRepo.create({
      created_date, 
      job_description,
      job_name,
      companyId,
      locationId,
      typeId
    })
    await JobRepo.save(job)
    return job
  }

  findAll() {
    return `This action returns all jobPost`;
  }

  async findOne(id: number) {

    // const {company_id, location_id, type_id} = createJobPostDto
    // const ComapanyRepo = getManager().getRepository(Company)
    // const company = await ComapanyRepo.findOne({id: company_id});
    const JobRepo = getManager().getRepository(JobPost)
    const job = await JobRepo.find({
      where: {
        id: id
      },
      relations: ['company', 'location', 'skills', 'type'],
      select: ['job_description', 'job_name']
    })
    return job;
  }

  update(id: number, updateJobPostDto: UpdateJobPostDto) {
    return `This action updates a #${id} jobPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobPost`;
  }
}
