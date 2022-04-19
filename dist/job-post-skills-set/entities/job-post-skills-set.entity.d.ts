import { BaseEntity } from "typeorm";
export declare class JobPostSkillsSet extends BaseEntity {
    skill_set_id: number;
    job_post_id: number;
    skill_level: number;
}
