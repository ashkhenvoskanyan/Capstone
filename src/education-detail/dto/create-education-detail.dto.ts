import { IsNotEmpty } from "class-validator";

export class CreateEducationDetailDto {

    @IsNotEmpty()
    certification_degree_name: string

    @IsNotEmpty()
    major: string

    @IsNotEmpty()
    university_name: string

    @IsNotEmpty()
    starting_date: Date

    @IsNotEmpty()
    completion_date: Date

}
