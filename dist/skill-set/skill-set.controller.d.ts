import { SkillSetService } from './skill-set.service';
import { CreateSkillSetDto } from './dto/create-skill-set.dto';
import { UpdateSkillSetDto } from './dto/update-skill-set.dto';
export declare class SkillSetController {
    private readonly skillSetService;
    constructor(skillSetService: SkillSetService);
    create(createSkillSetDto: CreateSkillSetDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSkillSetDto: UpdateSkillSetDto): string;
    remove(id: string): string;
}
