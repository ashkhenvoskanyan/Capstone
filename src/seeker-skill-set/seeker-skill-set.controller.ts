import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeekerSkillSetService } from './seeker-skill-set.service';
import { CreateSeekerSkillSetDto } from './dto/create-seeker-skill-set.dto';
import { UpdateSeekerSkillSetDto } from './dto/update-seeker-skill-set.dto';

@Controller('seeker-skill-set')
export class SeekerSkillSetController {
  constructor(private readonly seekerSkillSetService: SeekerSkillSetService) {}

  @Post()
  create(@Body() createSeekerSkillSetDto: CreateSeekerSkillSetDto) {
    //return this.seekerSkillSetService.create(createSeekerSkillSetDto);
  }

  @Get()
  findAll() {
    return this.seekerSkillSetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seekerSkillSetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeekerSkillSetDto: UpdateSeekerSkillSetDto) {
    return this.seekerSkillSetService.update(+id, updateSeekerSkillSetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seekerSkillSetService.remove(+id);
  }
}
