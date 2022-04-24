import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationDetailService } from './education-detail.service';
import { CreateEducationDetailDto } from './dto/create-education-detail.dto';
import { UpdateEducationDetailDto } from './dto/update-education-detail.dto';

@Controller('education-detail')
export class EducationDetailController {
  constructor(private readonly educationDetailService: EducationDetailService) {}

  @Post('/education')
  create(@Body() createEducationDetailDto: CreateEducationDetailDto) {
    return this.educationDetailService.create(createEducationDetailDto);
  }

  @Get()
  findAll() {
    return this.educationDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEducationDetailDto: UpdateEducationDetailDto) {
    return this.educationDetailService.update(+id, updateEducationDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationDetailService.remove(+id);
  }
}
