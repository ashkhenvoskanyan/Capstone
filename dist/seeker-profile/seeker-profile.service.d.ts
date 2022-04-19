import { CreateSeekerProfileDto } from './dto/create-seeker-profile.dto';
import { UpdateSeekerProfileDto } from './dto/update-seeker-profile.dto';
export declare class SeekerProfileService {
    create(createSeekerProfileDto: CreateSeekerProfileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSeekerProfileDto: UpdateSeekerProfileDto): string;
    remove(id: number): string;
}
