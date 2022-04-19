import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
export declare class CompanyService {
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCompanyDto: UpdateCompanyDto): string;
    remove(id: number): string;
}
