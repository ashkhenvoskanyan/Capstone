import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('education_detail')
export class EducationDetail {
    @PrimaryGeneratedColumn()
    user_accoumt_id: number

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
}
