import {IsNotEmpty } from "class-validator";

export class CreateCompanyDto {

    @IsNotEmpty()
    company_name: string

    @IsNotEmpty()
    profile_description: string

    @IsNotEmpty()
    establishment_date: Date

    @IsNotEmpty()
    company_website_url: string

    @IsNotEmpty()
    userId: number
  

}
