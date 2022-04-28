import { Company } from "src/company/entities/company.entity";
import { JobLocation } from "src/job-location/entities/job-location.entity";
import { JobPostActivity } from "src/job-post-activity/entities/job-post-activity.entity";
import { JobPostSkillsSet } from "src/job-post-skills-set/entities/job-post-skills-set.entity";
import { JobType } from "src/job-type/entities/job-type.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post')

export class JobPost extends BaseEntity{

    @PrimaryGeneratedColumn()
    job_post_id: number

    @Column()
    created_date: Date

    @Column()
    job_description: string

    @Column()
    job_name: string

     // @Column()
    // company_id: number

     // @Column()
    // job_location_id: number

     // @Column()
    // is_active: string

    // @Column()
    // job_type_id: number
    
    // @Column()
    // posted_by_id: number

    

    @ManyToOne(() => Company, (company) => company.jobs)
    company: Company

    @ManyToOne(() => JobLocation, (location) => location.jobs)
    location: JobLocation

    @OneToMany(() => JobPostActivity, (activity) => activity.job)
    activity: JobPostActivity[]

    @OneToMany(() => JobPostSkillsSet, (skills) => skills.job)
    skills: JobPostSkillsSet[]

    @ManyToOne(() => JobType, (type) => type.jobs)
    type: JobType
    
}