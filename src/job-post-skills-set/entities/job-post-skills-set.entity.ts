import { JobPost } from "src/job-post/entities/job-post.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post_skills')

export class JobPostSkillsSet extends BaseEntity{

    @PrimaryGeneratedColumn()
    job_skill_id: number

    // @Column()
    // job_post_id: number

    @Column()
    skills: string

    // @Column()
    // skill_level: number

    @ManyToOne(() => JobPost, (job) => job.skills)
    job: JobPost
}