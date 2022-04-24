import { IsNotEmpty } from "class-validator";

export class CreateExperienceDetailDto {

    @IsNotEmpty()
    is_current_job: string

    @IsNotEmpty()
    start_date: Date

    @IsNotEmpty()
    end_date: Date

    @IsNotEmpty()
    job_title: string

    @IsNotEmpty()
    company_name: string

    @IsNotEmpty()
    description: string
}
