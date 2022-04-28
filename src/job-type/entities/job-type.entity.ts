import { JobPost } from "src/job-post/entities/job-post.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_type')

export class JobType extends BaseEntity{

    @PrimaryGeneratedColumn()
    job_type_id: number

    @Column()
    job_type: string

    @OneToMany(() => JobPost, (job) => job.type)
    jobs: JobPost[]
}