import { JobPost } from "src/job-post/entities/job-post.entity";
import { SeekerProfile } from "src/seeker-profile/entities/seeker-profile.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post_activity')

export class JobPostActivity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    apply_date: Date

    @Column({ nullable: true })
    seekerId: number

    @Column({ nullable: true })
    jobId: number

    @ManyToOne(() => JobPost, (job) => job.activity)
    job: JobPost

    @ManyToOne(() => SeekerProfile, (seeker) => seeker.activity)
    seeker: SeekerProfile
}