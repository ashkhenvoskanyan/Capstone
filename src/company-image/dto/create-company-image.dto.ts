import { IsNotEmpty } from "class-validator";

export class CreateCompanyImageDto {

    @IsNotEmpty()
    company_image: string
}
