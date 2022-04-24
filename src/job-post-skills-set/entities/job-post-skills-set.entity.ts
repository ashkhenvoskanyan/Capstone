import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post_skills')

export class JobPostSkillsSet extends BaseEntity{

    @PrimaryGeneratedColumn()
    job_skill_id: number

    @Column()
    job_post_id: number

    @Column()
    skills: string



    // @Column()
    // skill_level: number
}