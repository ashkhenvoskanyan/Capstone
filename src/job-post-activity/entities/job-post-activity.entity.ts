import { JobPost } from "src/job-post/entities/job-post.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post_activity')

export class JobPostActivity extends BaseEntity{

    @PrimaryGeneratedColumn()
    activity_id: number

    // @Column()
    // user_account_id: number
    //te pahenq
    //seeker_profile_id: number

    // @Column()
    // job_post_id: number

    @Column()
    apply_date: Date

    @ManyToOne(() => JobPost, (job) => job.activity)
    job: JobPost
}