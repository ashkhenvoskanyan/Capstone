import { IsNotEmpty } from "class-validator";

export class CreateJobPostActivityDto {

    // @IsNotEmpty()
    // apply_date: Date

    @IsNotEmpty()
    job_id: number

    @IsNotEmpty()
    seeker_id: number
}

