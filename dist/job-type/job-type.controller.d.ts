import { JobTypeService } from './job-type.service';
import { CreateJobTypeDto } from './dto/create-job-type.dto';
import { UpdateJobTypeDto } from './dto/update-job-type.dto';
export declare class JobTypeController {
    private readonly jobTypeService;
    constructor(jobTypeService: JobTypeService);
    create(createJobTypeDto: CreateJobTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJobTypeDto: UpdateJobTypeDto): string;
    remove(id: string): string;
}
