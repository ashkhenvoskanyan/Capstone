import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyImageService } from './company-image.service';
import { CreateCompanyImageDto } from './dto/create-company-image.dto';
import { UpdateCompanyImageDto } from './dto/update-company-image.dto';

@Controller('company-image')
export class CompanyImageController {
  constructor(private readonly companyImageService: CompanyImageService) {}

  @Post()
  create(@Body() createCompanyImageDto: CreateCompanyImageDto) {
    return this.companyImageService.create(createCompanyImageDto);
  }

  @Get()
  findAll() {
    return this.companyImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyImageDto: UpdateCompanyImageDto) {
    return this.companyImageService.update(+id, updateCompanyImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyImageService.remove(+id);
  }
}
