import { SeekerProfile } from "src/seeker-profile/entities/seeker-profile.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('seeker_skill_set')

export class SeekerSkillSet extends BaseEntity{

    @PrimaryGeneratedColumn()
    seeker_skill_set_id: number

    @Column()
    skills: string

    @ManyToOne(() => SeekerProfile, (seeker) => seeker.skills)
    seeker: SeekerProfile

    // @Column()
    // skill_level: number
}