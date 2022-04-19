import { CreateJobPostDto } from './dto/create-job-post.dto';
import { UpdateJobPostDto } from './dto/update-job-post.dto';
export declare class JobPostService {
    create(createJobPostDto: CreateJobPostDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJobPostDto: UpdateJobPostDto): string;
    remove(id: number): string;
}
