import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationDetailModule } from './education-detail/education-detail.module';
import { CompanyImageModule } from './company-image/company-image.module';
import { CompanyModule } from './company/company.module';
import { ExperienceDetailModule } from './experience-detail/experience-detail.module';
import { JobLocationModule } from './job-location/job-location.module';
import { JobPostActivityModule } from './job-post-activity/job-post-activity.module';
import { JobPostSkillsSetModule } from './job-post-skills-set/job-post-skills-set.module';
import { JobPostModule } from './job-post/job-post.module';
import { JobTypeModule } from './job-type/job-type.module';
import { SeekerProfileModule } from './seeker-profile/seeker-profile.module';
import { SeekerSkillSetModule } from './seeker-skill-set/seeker-skill-set.module';
import { UserAccountModule } from './user-account/user-account.module';
import { join } from 'path';
import "reflect-metadata"
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Barcelona1899',
      database: 'job_page',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],  
      synchronize: true,
    
    }),

    MulterModule.register({
      dest: './files'
    }),
    
    EducationDetailModule,
    CompanyImageModule,
    CompanyModule,
    ExperienceDetailModule,
    JobLocationModule,
    JobPostActivityModule,
    JobPostSkillsSetModule,
    JobPostModule,
    JobTypeModule,
    SeekerProfileModule,
    SeekerSkillSetModule,
    UserAccountModule,
  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
