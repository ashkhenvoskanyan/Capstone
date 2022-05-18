import { Injectable } from '@nestjs/common';
import { JobPost } from 'src/job-post/entities/job-post.entity';
import { SeekerProfile } from 'src/seeker-profile/entities/seeker-profile.entity';
import { getManager } from 'typeorm';
import { CreateJobPostActivityDto } from './dto/create-job-post-activity.dto';
import { UpdateJobPostActivityDto } from './dto/update-job-post-activity.dto';
import { JobPostActivity } from './entities/job-post-activity.entity';

@Injectable()
export class JobPostActivityService {
  async create(createJobPostActivityDto: CreateJobPostActivityDto) {
    
    const {job_id, seeker_id} = createJobPostActivityDto
    const JobRepo = getManager().getRepository(JobPost)
    const job = await JobRepo.findOne({id: job_id})
    const SeekerRepo = getManager().getRepository(SeekerProfile)
    const seeker = await SeekerRepo.findOne({id: seeker_id})
    const ApplyRepo = getManager().getRepository(JobPostActivity)
    const apply = ApplyRepo.create({
      apply_date: new Date().toISOString(),
      job,
      seeker
    })
    await ApplyRepo.save(apply)

    return apply;
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
