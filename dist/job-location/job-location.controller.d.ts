import { JobLocationService } from './job-location.service';
import { CreateJobLocationDto } from './dto/create-job-location.dto';
import { UpdateJobLocationDto } from './dto/update-job-location.dto';
export declare class JobLocationController {
    private readonly jobLocationService;
    constructor(jobLocationService: JobLocationService);
    create(createJobLocationDto: CreateJobLocationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJobLocationDto: UpdateJobLocationDto): string;
    remove(id: string): string;
}
