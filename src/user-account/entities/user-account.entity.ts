import { SeekerProfile } from "src/seeker-profile/entities/seeker-profile.entity";
import { UserType } from "src/user-type/entities/user-type.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('user_account')

export class UserAccount extends BaseEntity{

    @PrimaryGeneratedColumn()
    account_id: number

    @Column()
    email: string

    // @Column()
    // first_name: string

    // @Column()
    // last_name: string

    @Column()
    password: string

    @Column()
    date_of_birth: Date

    @Column()
    gender: string

    @Column()
    is_active: boolean

    @Column()
    contact_number: number

    // @Column()
    // user_image: string //"aaa.jpg" ask Saro 

    @ManyToOne(() => UserType, userType => userType.users, {eager: true})
    user_type: UserType

    @OneToMany(() => SeekerProfile, (seeker) => seeker.user)
    seeker: SeekerProfile[]

}