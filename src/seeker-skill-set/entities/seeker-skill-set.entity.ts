import { SeekerProfile } from "src/seeker-profile/entities/seeker-profile.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('seeker_skill_set')

export class SeekerSkillSet extends BaseEntity{

    @PrimaryGeneratedColumn()
    seeker_skill_set_id: number

    @Column()
    skills: string

    @Column({ nullable: true })
    seekerId: number

    @ManyToOne(() => SeekerProfile, (seeker) => seeker.skills, {eager: true})
    @JoinColumn()
    seeker: SeekerProfile

    // @Column()
    // skill_level: number
}