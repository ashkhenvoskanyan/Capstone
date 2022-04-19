"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostSkillsSetModule = void 0;
const common_1 = require("@nestjs/common");
const job_post_skills_set_service_1 = require("./job-post-skills-set.service");
const job_post_skills_set_controller_1 = require("./job-post-skills-set.controller");
let JobPostSkillsSetModule = class JobPostSkillsSetModule {
};
JobPostSkillsSetModule = __decorate([
    (0, common_1.Module)({
        controllers: [job_post_skills_set_controller_1.JobPostSkillsSetController],
        providers: [job_post_skills_set_service_1.JobPostSkillsSetService]
    })
], JobPostSkillsSetModule);
exports.JobPostSkillsSetModule = JobPostSkillsSetModule;
//# sourceMappingURL=job-post-skills-set.module.js.map