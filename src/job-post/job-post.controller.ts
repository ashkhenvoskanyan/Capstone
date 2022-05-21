import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { intersection } from 'lodash';
import { JobPostService } from './job-post.service';
import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
import { getConnection, getManager } from 'typeorm';
import { JobPostSkillsSet } from 'src/job-post-skills-set/entities/job-post-skills-set.entity';
import { SeekerSkillSet } from 'src/seeker-skill-set/entities/seeker-skill-set.entity';
import { JobPost } from './entities/job-post.entity';
import { UserAccount } from 'src/user-account/entities/user-account.entity';
import { Company } from 'src/company/entities/company.entity';

@Controller('job-post')
export class JobPostController {
  constructor(private readonly jobPostService: JobPostService) {}

  @Post('/job')
  create(@Body() createJobPostDto: CreateJobPostDto) {
    return this.jobPostService.create(createJobPostDto);
  }

  @Get('/matchingJobs/:id')
  async matchingJobs(@Param('id') id: string){
    console.log('matching jobs');
    const JobSkillRepo = getManager().getRepository(JobPostSkillsSet)
    const SeekerSkillRepo = getManager().getRepository(SeekerSkillSet)
    const seeker = await SeekerSkillRepo.find({
      where: {
      seekerId: id
      },
      select: ['skills']
    })
    const userSkills = seeker.map(seeker => seeker.skills);
    console.log(userSkills);
    const jobs = await JobSkillRepo.find({
      where: {
        jobId: id
      },
      select: ['skills']
    })
    const jobSkills = jobs.map(job => job.skills);

    const result = jobs.filter(job => intersection(jobSkills, userSkills).length > 0)
    return result
    // const job = await getConnection().createQueryBuilder()
    // .select("jobPost")
    // .from()
  }

  @Get('/companyjobs/:id')
  async companyJobs(@Param('id') id: string){
    // const JobRepo = getManager().getRepository(JobPost)
    // const UserRepo = getManager().getRepository(UserAccount)
    const CompanyRepo = getManager().getRepository(Company)
    
    const jobs = await CompanyRepo.find({
      where: {
        userId: id
      },
      select: ['jobs']
    })
    return jobs
  }

  @Get()
  findAll() {
    return this.jobPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobPostDto: UpdateJobPostDto) {
    return this.jobPostService.update(+id, updateJobPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobPostService.remove(+id);
  }
}
function where(where: any, arg1: {}) {
  throw new Error('Function not implemented.');
}

