import { EducationDetailService } from './education-detail.service';
import { CreateEducationDetailDto } from './dto/create-education-detail.dto';
import { UpdateEducationDetailDto } from './dto/update-education-detail.dto';
export declare class EducationDetailController {
    private readonly educationDetailService;
    constructor(educationDetailService: EducationDetailService);
    create(createEducationDetailDto: CreateEducationDetailDto): Promise<import("./entities/education-detail.entity").EducationDetail>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEducationDetailDto: UpdateEducationDetailDto): string;
    remove(id: string): string;
}
