import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_post')

export class JobPost extends BaseEntity{

    @PrimaryGeneratedColumn()
    job_post_id: number

    @Column()
    posted_by_id: number// sranq urish tablneri id-ner en 
                        //sranq vonc petqa crwat-i jamanak anenq

    @Column()
    job_type_id: number

    @Column()
    company_id: number

    @Column()
    created_date: Date

    @Column()
    job_description: string

    @Column()
    job_location_id: number

    @Column()
    is_active: string
    
}