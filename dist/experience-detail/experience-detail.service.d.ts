import { CreateExperienceDetailDto } from './dto/create-experience-detail.dto';
import { UpdateExperienceDetailDto } from './dto/update-experience-detail.dto';
import { ExperienceDetail } from './entities/experience-detail.entity';
export declare class ExperienceDetailService {
    create(createExperienceDetailDto: CreateExperienceDetailDto): Promise<ExperienceDetail>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExperienceDetailDto: UpdateExperienceDetailDto): string;
    remove(id: number): string;
}
