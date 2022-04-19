import { CreateJobLocationDto } from './dto/create-job-location.dto';
import { UpdateJobLocationDto } from './dto/update-job-location.dto';
export declare class JobLocationService {
    create(createJobLocationDto: CreateJobLocationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJobLocationDto: UpdateJobLocationDto): string;
    remove(id: number): string;
}
