import { CreateJobTypeDto } from './dto/create-job-type.dto';
import { UpdateJobTypeDto } from './dto/update-job-type.dto';
export declare class JobTypeService {
    create(createJobTypeDto: CreateJobTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJobTypeDto: UpdateJobTypeDto): string;
    remove(id: number): string;
}
