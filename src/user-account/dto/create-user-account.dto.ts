import {IsEmail, IsNotEmpty, Length, Matches} from 'class-validator'

export class CreateUserAccountDto {

    @IsNotEmpty()
    first_name:string

    @IsNotEmpty()
    last_name:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @Length(6, 24)
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    password:string

    @IsNotEmpty()
    date_of_birth: Date

    @IsNotEmpty()
    gender:string

    @IsNotEmpty()
    is_active: boolean

    @IsNotEmpty()
    contact_number: number

    @IsNotEmpty()
    user_type: number

}


