import { IsNotEmpty } from "class-validator";

export class CreateSeekerSkillSetDto {

    @IsNotEmpty()
    user_id:number
  
    @IsNotEmpty()
    skills:Record<string, string>

}
