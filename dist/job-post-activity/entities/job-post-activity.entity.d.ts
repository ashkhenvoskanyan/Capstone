import { BaseEntity } from "typeorm";
export declare class JobPostActivity extends BaseEntity {
    activity_id: number;
    user_account_id: number;
    job_post_id: number;
    apply_date: Date;
}
