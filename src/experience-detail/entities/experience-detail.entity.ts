import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('experience_detail')

export class ExperienceDetail extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_acount_id: number

    @Column()
    is_current_job: string

    @Column()
    start_date: Date

    @Column()
    end_date: Date

    @Column()
    job_title: string

    @Column()
    company_name: string

    @Column()
    description: string
    
}