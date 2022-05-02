import { IsNotEmpty } from "class-validator";

export class CreateJobPostDto {

    @IsNotEmpty()
    created_date: Date

    @IsNotEmpty()
    job_description: string

    @IsNotEmpty()
    job_name: string
}
