import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('seeker_profile')

export class SeekerProfile extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_account_id: number

    @Column()
    first_name: string// sranq register aneluc lracnum en vonc petqa stex tesnenq
    
    @Column()
    last_name: String

}