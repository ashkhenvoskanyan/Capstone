import { CreateSkillSetDto } from './dto/create-skill-set.dto';
import { UpdateSkillSetDto } from './dto/update-skill-set.dto';
export declare class SkillSetService {
    create(createSkillSetDto: CreateSkillSetDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSkillSetDto: UpdateSkillSetDto): string;
    remove(id: number): string;
}
