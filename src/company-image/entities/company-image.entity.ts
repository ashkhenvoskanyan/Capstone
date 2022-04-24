import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('company_image')

export class CompanyImage extends BaseEntity{

    @PrimaryGeneratedColumn()
    cimage_id: number

    @Column()
    company_image: string //(aaa.jpg)
    
    @Column()
    company_id: number
}