import { JobPostActivityService } from './job-post-activity.service';
import { CreateJobPostActivityDto } from './dto/create-job-post-activity.dto';
import { UpdateJobPostActivityDto } from './dto/update-job-post-activity.dto';
export declare class JobPostActivityController {
    private readonly jobPostActivityService;
    constructor(jobPostActivityService: JobPostActivityService);
    create(createJobPostActivityDto: CreateJobPostActivityDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJobPostActivityDto: UpdateJobPostActivityDto): string;
    remove(id: string): string;
}
