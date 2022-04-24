import { UserAccount } from "src/user-account/entities/user-account.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('user_type')

export class UserType extends BaseEntity{

    @PrimaryGeneratedColumn()
    type_id: number;

    @Column()
    user_type_name: string

    @OneToMany(() => UserAccount, (account) => account.user_type)
    users: UserAccount[]

}


