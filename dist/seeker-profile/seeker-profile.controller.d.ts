import { SeekerProfileService } from './seeker-profile.service';
import { CreateSeekerProfileDto } from './dto/create-seeker-profile.dto';
import { UpdateSeekerProfileDto } from './dto/update-seeker-profile.dto';
export declare class SeekerProfileController {
    private readonly seekerProfileService;
    constructor(seekerProfileService: SeekerProfileService);
    create(createSeekerProfileDto: CreateSeekerProfileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSeekerProfileDto: UpdateSeekerProfileDto): string;
    remove(id: string): string;
}
