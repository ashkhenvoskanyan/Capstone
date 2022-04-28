import { SeekerProfile } from "src/seeker-profile/entities/seeker-profile.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('education_detail')
export class EducationDetail {
    @PrimaryGeneratedColumn()
    education_detail_id: number

    @Column()
    certification_degree_name: string

    @Column()
    major: string

    @Column()
    university_name: string

    @Column()
    starting_date: Date

    @Column()
    completion_date: Date

    @ManyToOne(() => SeekerProfile, (seeker) => seeker.education)
    seeker: SeekerProfile
}
