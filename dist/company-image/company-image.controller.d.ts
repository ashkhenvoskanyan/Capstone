import { CompanyImageService } from './company-image.service';
import { CreateCompanyImageDto } from './dto/create-company-image.dto';
import { UpdateCompanyImageDto } from './dto/update-company-image.dto';
export declare class CompanyImageController {
    private readonly companyImageService;
    constructor(companyImageService: CompanyImageService);
    create(createCompanyImageDto: CreateCompanyImageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCompanyImageDto: UpdateCompanyImageDto): string;
    remove(id: string): string;
}
