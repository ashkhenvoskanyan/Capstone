import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post_activity')

export class JobPostActivity extends BaseEntity{

    @PrimaryGeneratedColumn()
    activity_id: number

    @Column()
    user_account_id: number

    @Column()
    job_post_id: number

    @Column()
    apply_date: Date
}