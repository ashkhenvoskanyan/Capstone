import { EducationDetail } from "src/education-detail/entities/education-detail.entity";
import { ExperienceDetail } from "src/experience-detail/entities/experience-detail.entity";
import { JobPostActivity } from "src/job-post-activity/entities/job-post-activity.entity";
import { SeekerSkillSet } from "src/seeker-skill-set/entities/seeker-skill-set.entity";
import { UserAccount } from "src/user-account/entities/user-account.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('seeker_profile')

export class SeekerProfile extends BaseEntity{

    @PrimaryGeneratedColumn()
    seeker_profile_id: number

    @Column()
    first_name: string

    @Column()
    last_name: String

    @OneToMany(() => EducationDetail, (education) => education.seeker)
    education: EducationDetail[]

    @OneToMany(() => ExperienceDetail, (experience) => experience.seeker)
    experiences: ExperienceDetail[]

    @OneToMany(() => SeekerSkillSet, (skill) => skill.seeker)
    skills: SeekerSkillSet[]

    @OneToMany(() => JobPostActivity, (activity) => activity.seeker)
    activity: JobPostActivity[]

    @ManyToOne(() => UserAccount, (user) => user.seeker)
    user: UserAccount

}