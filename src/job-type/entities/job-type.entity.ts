import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_type')

export class JobType extends BaseEntity{

    @PrimaryGeneratedColumn()
    job_type_id: number

    @Column()
    job_type: string
}