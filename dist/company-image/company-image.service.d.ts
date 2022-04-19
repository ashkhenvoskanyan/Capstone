import { CreateCompanyImageDto } from './dto/create-company-image.dto';
import { UpdateCompanyImageDto } from './dto/update-company-image.dto';
export declare class CompanyImageService {
    create(createCompanyImageDto: CreateCompanyImageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCompanyImageDto: UpdateCompanyImageDto): string;
    remove(id: number): string;
}
