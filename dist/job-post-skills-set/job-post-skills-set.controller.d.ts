import { JobPostSkillsSetService } from './job-post-skills-set.service';
import { CreateJobPostSkillsSetDto } from './dto/create-job-post-skills-set.dto';
import { UpdateJobPostSkillsSetDto } from './dto/update-job-post-skills-set.dto';
export declare class JobPostSkillsSetController {
    private readonly jobPostSkillsSetService;
    constructor(jobPostSkillsSetService: JobPostSkillsSetService);
    create(createJobPostSkillsSetDto: CreateJobPostSkillsSetDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJobPostSkillsSetDto: UpdateJobPostSkillsSetDto): string;
    remove(id: string): string;
}
