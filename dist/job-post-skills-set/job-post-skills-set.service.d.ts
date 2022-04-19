import { CreateJobPostSkillsSetDto } from './dto/create-job-post-skills-set.dto';
import { UpdateJobPostSkillsSetDto } from './dto/update-job-post-skills-set.dto';
export declare class JobPostSkillsSetService {
    create(createJobPostSkillsSetDto: CreateJobPostSkillsSetDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJobPostSkillsSetDto: UpdateJobPostSkillsSetDto): string;
    remove(id: number): string;
}
