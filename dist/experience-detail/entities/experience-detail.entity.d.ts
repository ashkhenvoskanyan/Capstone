import { BaseEntity } from "typeorm";
export declare class ExperienceDetail extends BaseEntity {
    user_acount_id: number;
    is_current_job: string;
    start_date: Date;
    end_date: Date;
    job_title: string;
    company_name: string;
    description: string;
}
