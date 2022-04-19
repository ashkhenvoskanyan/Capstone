import { BaseEntity } from "typeorm";
export declare class JobPost extends BaseEntity {
    job_post_id: number;
    posted_by_id: number;
    job_type_id: number;
    company_id: number;
    created_date: Date;
    job_description: string;
    job_location_id: number;
    is_active: string;
}
