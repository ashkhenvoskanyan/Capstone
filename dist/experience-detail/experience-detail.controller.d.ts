import { ExperienceDetailService } from './experience-detail.service';
import { CreateExperienceDetailDto } from './dto/create-experience-detail.dto';
import { UpdateExperienceDetailDto } from './dto/update-experience-detail.dto';
export declare class ExperienceDetailController {
    private readonly experienceDetailService;
    constructor(experienceDetailService: ExperienceDetailService);
    create(createExperienceDetailDto: CreateExperienceDetailDto): Promise<import("./entities/experience-detail.entity").ExperienceDetail>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateExperienceDetailDto: UpdateExperienceDetailDto): string;
    remove(id: string): string;
}
