import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeekerProfileService } from './seeker-profile.service';
import { CreateSeekerProfileDto } from './dto/create-seeker-profile.dto';
import { UpdateSeekerProfileDto } from './dto/update-seeker-profile.dto';

@Controller('seeker-profile')
export class SeekerProfileController {
  constructor(private readonly seekerProfileService: SeekerProfileService) {}

  @Post()
  create(@Body() createSeekerProfileDto: CreateSeekerProfileDto) {
    return this.seekerProfileService.create(createSeekerProfileDto);
  }

  @Get()
  findAll() {
    return this.seekerProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seekerProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeekerProfileDto: UpdateSeekerProfileDto) {
    return this.seekerProfileService.update(+id, updateSeekerProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seekerProfileService.remove(+id);
  }
}
