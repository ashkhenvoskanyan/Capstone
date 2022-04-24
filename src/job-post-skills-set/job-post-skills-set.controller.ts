import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobPostSkillsSetService } from './job-post-skills-set.service';
import { CreateJobPostSkillsSetDto } from './dto/create-job-post-skills-set.dto';
import { UpdateJobPostSkillsSetDto } from './dto/update-job-post-skills-set.dto';

@Controller('job-post-skills-set')
export class JobPostSkillsSetController {
  constructor(private readonly jobPostSkillsSetService: JobPostSkillsSetService) {}

  @Post()
  create(@Body() createJobPostSkillsSetDto: CreateJobPostSkillsSetDto) {
    return this.jobPostSkillsSetService.create(createJobPostSkillsSetDto);
  }

  @Get()
  findAll() {
    return this.jobPostSkillsSetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobPostSkillsSetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobPostSkillsSetDto: UpdateJobPostSkillsSetDto) {
    return this.jobPostSkillsSetService.update(+id, updateJobPostSkillsSetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobPostSkillsSetService.remove(+id);
  }
}
