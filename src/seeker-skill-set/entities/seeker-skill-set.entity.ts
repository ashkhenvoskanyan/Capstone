import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('seeker_skill_set')

export class SeekerSkillSet extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_account_id: number

    @Column()
    skills: string

    // @Column()
    // skill_level: number
}