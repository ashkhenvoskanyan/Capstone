import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateEducationDetailDto } from './dto/create-education-detail.dto';
import { UpdateEducationDetailDto } from './dto/update-education-detail.dto';
import { EducationDetail } from './entities/education-detail.entity';

@Injectable()
export class EducationDetailService {
  async create(createEducationDetailDto: CreateEducationDetailDto) {
    const {certification_degree_name, major, university_name, 
          starting_date, completion_date} = createEducationDetailDto;

    const EducationRepo = getManager().getRepository(EducationDetail)
    const education = EducationRepo.create({
      certification_degree_name,
      major,
      university_name,
      starting_date,
      completion_date
    })
    await EducationRepo.save(education)
    return education;
  }

  findAll() {
    return `This action returns all educationDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} educationDetail`;
  }

  update(id: number, updateEducationDetailDto: UpdateEducationDetailDto) {
    return `This action updates a #${id} educationDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} educationDetail`;
  }
}
