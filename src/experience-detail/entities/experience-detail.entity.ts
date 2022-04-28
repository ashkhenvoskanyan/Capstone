import { SeekerProfile } from "src/seeker-profile/entities/seeker-profile.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('experience_detail')

export class ExperienceDetail extends BaseEntity{

    @PrimaryGeneratedColumn()
    experience_detail_id: number

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

    @ManyToOne(() => SeekerProfile, (seeker) => seeker.experiences)
    seeker: SeekerProfile
    
}