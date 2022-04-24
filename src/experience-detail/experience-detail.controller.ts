import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceDetailService } from './experience-detail.service';
import { CreateExperienceDetailDto } from './dto/create-experience-detail.dto';
import { UpdateExperienceDetailDto } from './dto/update-experience-detail.dto';

@Controller('experience-detail')
export class ExperienceDetailController {
  constructor(private readonly experienceDetailService: ExperienceDetailService) {}

  @Post('/experience')
  create(@Body() createExperienceDetailDto: CreateExperienceDetailDto) {
    return this.experienceDetailService.create(createExperienceDetailDto);
  }

  @Get()
  findAll() {
    return this.experienceDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperienceDetailDto: UpdateExperienceDetailDto) {
    return this.experienceDetailService.update(+id, updateExperienceDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceDetailService.remove(+id);
  }
}
