import { JobPostService } from './job-post.service';
import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
export declare class JobPostController {
    private readonly jobPostService;
    constructor(jobPostService: JobPostService);
    create(createJobPostDto: CreateJobPostDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJobPostDto: UpdateJobPostDto): string;
    remove(id: string): string;
}
