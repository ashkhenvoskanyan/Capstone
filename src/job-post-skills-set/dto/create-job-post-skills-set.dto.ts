import { IsNotEmpty } from "class-validator"

export class CreateJobPostSkillsSetDto {
   
    @IsNotEmpty()
    job_id:number
  
    @IsNotEmpty()
    skills:Record<string, string>
}
