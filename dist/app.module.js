"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const education_detail_module_1 = require("./education-detail/education-detail.module");
const bussiness_stream_module_1 = require("./bussiness-stream/bussiness-stream.module");
const company_image_module_1 = require("./company-image/company-image.module");
const company_module_1 = require("./company/company.module");
const experience_detail_module_1 = require("./experience-detail/experience-detail.module");
const job_location_module_1 = require("./job-location/job-location.module");
const job_post_activity_module_1 = require("./job-post-activity/job-post-activity.module");
const job_post_skills_set_module_1 = require("./job-post-skills-set/job-post-skills-set.module");
const job_post_module_1 = require("./job-post/job-post.module");
const job_type_module_1 = require("./job-type/job-type.module");
const seeker_profile_module_1 = require("./seeker-profile/seeker-profile.module");
const seeker_skill_set_module_1 = require("./seeker-skill-set/seeker-skill-set.module");
const skill_set_module_1 = require("./skill-set/skill-set.module");
const user_account_module_1 = require("./user-account/user-account.module");
const user_type_module_1 = require("./user-type/user-type.module");
const path_1 = require("path");
require("reflect-metadata");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Barcelona1899',
                database: 'job_page',
                entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
                synchronize: true,
            }),
            education_detail_module_1.EducationDetailModule,
            bussiness_stream_module_1.BussinessStreamModule,
            company_image_module_1.CompanyImageModule,
            company_module_1.CompanyModule,
            experience_detail_module_1.ExperienceDetailModule,
            job_location_module_1.JobLocationModule,
            job_post_activity_module_1.JobPostActivityModule,
            job_post_skills_set_module_1.JobPostSkillsSetModule,
            job_post_module_1.JobPostModule,
            job_type_module_1.JobTypeModule,
            seeker_profile_module_1.SeekerProfileModule,
            seeker_skill_set_module_1.SeekerSkillSetModule,
            skill_set_module_1.SkillSetModule,
            user_account_module_1.UserAccountModule,
            user_type_module_1.UserTypeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map