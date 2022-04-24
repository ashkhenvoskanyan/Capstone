import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobPostActivityService } from './job-post-activity.service';
import { CreateJobPostActivityDto } from './dto/create-job-post-activity.dto';
import { UpdateJobPostActivityDto } from './dto/update-job-post-activity.dto';

@Controller('job-post-activity')
export class JobPostActivityController {
  constructor(private readonly jobPostActivityService: JobPostActivityService) {}

  @Post()
  create(@Body() createJobPostActivityDto: CreateJobPostActivityDto) {
    return this.jobPostActivityService.create(createJobPostActivityDto);
  }

  @Get()
  findAll() {
    return this.jobPostActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobPostActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobPostActivityDto: UpdateJobPostActivityDto) {
    return this.jobPostActivityService.update(+id, updateJobPostActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobPostActivityService.remove(+id);
  }
}
