import { Injectable } from '@nestjs/common';
import { CreateJobPostActivityDto } from './dto/create-job-post-activity.dto';
import { UpdateJobPostActivityDto } from './dto/update-job-post-activity.dto';

@Injectable()
export class JobPostActivityService {
  create(createJobPostActivityDto: CreateJobPostActivityDto) {
    return 'This action adds a new jobPostActivity';
  }

  findAll() {
    return `This action returns all jobPostActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobPostActivity`;
  }

  update(id: number, updateJobPostActivityDto: UpdateJobPostActivityDto) {
    return `This action updates a #${id} jobPostActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobPostActivity`;
  }
}
