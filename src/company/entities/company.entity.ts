import { CompanyImage } from "src/company-image/entities/company-image.entity";
import { JobPost } from "src/job-post/entities/job-post.entity";
import { UserAccount } from "src/user-account/entities/user-account.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('company')

export class Company extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    company_name: string

    @Column()
    profile_description: string

    @Column()
    establishment_date: Date

    @Column()
    company_website_url: string 

    @Column({ nullable: true })
    userId: number

    @OneToMany(() => JobPost, (job) => job.company, {eager: true})
    jobs: JobPost[]

    @OneToMany(() => CompanyImage, (image) => image.company)
    images: CompanyImage[]

    @OneToOne(() => UserAccount)
    @JoinColumn()
    user: UserAccount

}
