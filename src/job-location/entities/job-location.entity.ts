import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('job_location')

export class JobLocation extends BaseEntity{

    @PrimaryGeneratedColumn()
    location_id: number

    @Column()
    street_address: string

    @Column()
    city: string

    @Column()
    country: string
    
}