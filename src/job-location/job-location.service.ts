import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateJobLocationDto } from './dto/create-job-location.dto';
import { UpdateJobLocationDto } from './dto/update-job-location.dto';
import { JobLocation } from './entities/job-location.entity';

@Injectable()
export class JobLocationService {
  async create(createJobLocationDto: CreateJobLocationDto) {

    const {street_address, city, country} = createJobLocationDto

    const LocationRepo = getManager().getRepository(JobLocation)
    const location = LocationRepo.create({
      street_address, 
      city, 
      country
      })
      await LocationRepo.save(location)
    return location
  }

  findAll() {
    return `This action returns all jobLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobLocation`;
  }

  update(id: number, updateJobLocationDto: UpdateJobLocationDto) {
    return `This action updates a #${id} jobLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobLocation`;
  }
}
