import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateJobTypeDto } from './dto/create-job-type.dto';
import { UpdateJobTypeDto } from './dto/update-job-type.dto';
import { JobType } from './entities/job-type.entity';

@Injectable()
export class JobTypeService {
  async create(createJobTypeDto: CreateJobTypeDto) {

    const {job_type} = createJobTypeDto

    const TypeRepo = getManager().getRepository(JobType)
    const type = TypeRepo.create({
      job_type
    })
    await TypeRepo.save(type)
    return type;
  }

  findAll() {
    return `This action returns all jobType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobType`;
  }

  update(id: number, updateJobTypeDto: UpdateJobTypeDto) {
    return `This action updates a #${id} jobType`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobType`;
  }
}
