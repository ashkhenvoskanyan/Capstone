import { CreateJobPostActivityDto } from './dto/create-job-post-activity.dto';
import { UpdateJobPostActivityDto } from './dto/update-job-post-activity.dto';
export declare class JobPostActivityService {
    create(createJobPostActivityDto: CreateJobPostActivityDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJobPostActivityDto: UpdateJobPostActivityDto): string;
    remove(id: number): string;
}
