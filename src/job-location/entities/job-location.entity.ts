import { JobPost } from "src/job-post/entities/job-post.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_location')

export class JobLocation extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    street_address: string

    @Column()
    city: string

    @Column()
    country: string

    @OneToMany(() => JobPost, (job) => job.location)
    @JoinColumn()
    jobs: JobPost[]
    
}