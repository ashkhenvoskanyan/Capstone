import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  async create(createCompanyDto: CreateCompanyDto) {

    const {company_name, profile_description, establishment_date, 
      company_website_url} = createCompanyDto

      const CompanyRepo = getManager().getRepository(Company)
      const company = CompanyRepo.create({
        company_name,
        profile_description,
        establishment_date,
        company_website_url
      })
      await CompanyRepo.save(company)
    return company;
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
