import { CreateSeekerSkillSetDto } from './dto/create-seeker-skill-set.dto';
import { UpdateSeekerSkillSetDto } from './dto/update-seeker-skill-set.dto';
export declare class SeekerSkillSetService {
    create(createSeekerSkillSetDto: CreateSeekerSkillSetDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSeekerSkillSetDto: UpdateSeekerSkillSetDto): string;
    remove(id: number): string;
}
