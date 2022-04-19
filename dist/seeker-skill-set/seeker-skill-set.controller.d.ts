import { SeekerSkillSetService } from './seeker-skill-set.service';
import { CreateSeekerSkillSetDto } from './dto/create-seeker-skill-set.dto';
import { UpdateSeekerSkillSetDto } from './dto/update-seeker-skill-set.dto';
export declare class SeekerSkillSetController {
    private readonly seekerSkillSetService;
    constructor(seekerSkillSetService: SeekerSkillSetService);
    create(createSeekerSkillSetDto: CreateSeekerSkillSetDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSeekerSkillSetDto: UpdateSeekerSkillSetDto): string;
    remove(id: string): string;
}
