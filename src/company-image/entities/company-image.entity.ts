import { Company } from "src/company/entities/company.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('company_image')

export class CompanyImage extends BaseEntity{

    @PrimaryGeneratedColumn()
    cimage_id: number

    @Column()
    company_image: string //(aaa.jpg)
    
    // @Column()
    // company_id: number

    @ManyToOne(() => Company, (company) => company.images)
    company: Company
}