import { IsNotEmpty } from "class-validator";

export class CreateJobTypeDto {

    @IsNotEmpty()
    job_type: string
}
