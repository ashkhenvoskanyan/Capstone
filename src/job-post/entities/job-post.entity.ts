import { Company } from "src/company/entities/company.entity";
import { JobLocation } from "src/job-location/entities/job-location.entity";
import { JobPostActivity } from "src/job-post-activity/entities/job-post-activity.entity";
import { JobPostSkillsSet } from "src/job-post-skills-set/entities/job-post-skills-set.entity";
import { JobType } from "src/job-type/entities/job-type.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post')

export class JobPost extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    created_date: Date

    @Column()
    job_description: string

    @Column()
    job_name: string


    @Column({nullable: true})
    companyId: number

    @Column({nullable: true})
    locationId: number

    @Column({nullable: true})
    typeId: number

    @ManyToOne(() => Company, (company) => company.job, {eager: true})
    @JoinColumn({name: "companyId"})
    company: Company

    @ManyToOne(() => JobLocation, (location) => location.jobs, {eager: true})
    @JoinColumn({name: "locationId"})
    location: JobLocation

    @OneToMany(() => JobPostActivity, (activity) => activity.job)
    activity: JobPostActivity[]

    @OneToMany(() => JobPostSkillsSet, (skills) => skills.job)
    skills: JobPostSkillsSet[]

    @ManyToOne(() => JobType, (type) => type.jobs, {eager: true})
    @JoinColumn({name: "typeId"})
    type: JobType
    
}