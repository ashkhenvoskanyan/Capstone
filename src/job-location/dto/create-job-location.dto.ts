import { IsNotEmpty } from "class-validator";

export class CreateJobLocationDto {

    @IsNotEmpty()
    street_address: string

    @IsNotEmpty()
    city: string

    @IsNotEmpty()
    country: string
}
