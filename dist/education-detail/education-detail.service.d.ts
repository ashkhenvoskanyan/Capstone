import { CreateEducationDetailDto } from './dto/create-education-detail.dto';
import { UpdateEducationDetailDto } from './dto/update-education-detail.dto';
import { EducationDetail } from './entities/education-detail.entity';
export declare class EducationDetailService {
    create(createEducationDetailDto: CreateEducationDetailDto): Promise<EducationDetail>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEducationDetailDto: UpdateEducationDetailDto): string;
    remove(id: number): string;
}
