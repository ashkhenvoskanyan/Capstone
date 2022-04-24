import { Injectable } from '@nestjs/common';
import { CreateCompanyImageDto } from './dto/create-company-image.dto';
import { UpdateCompanyImageDto } from './dto/update-company-image.dto';

@Injectable()
export class CompanyImageService {
  create(createCompanyImageDto: CreateCompanyImageDto) {
    return 'This action adds a new companyImage';
  }

  findAll() {
    return `This action returns all companyImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyImage`;
  }

  update(id: number, updateCompanyImageDto: UpdateCompanyImageDto) {
    return `This action updates a #${id} companyImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyImage`;
  }
}
