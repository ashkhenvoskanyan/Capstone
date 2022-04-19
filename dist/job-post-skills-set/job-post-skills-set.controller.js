"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostSkillsSetController = void 0;
const common_1 = require("@nestjs/common");
const job_post_skills_set_service_1 = require("./job-post-skills-set.service");
const create_job_post_skills_set_dto_1 = require("./dto/create-job-post-skills-set.dto");
const update_job_post_skills_set_dto_1 = require("./dto/update-job-post-skills-set.dto");
let JobPostSkillsSetController = class JobPostSkillsSetController {
    constructor(jobPostSkillsSetService) {
        this.jobPostSkillsSetService = jobPostSkillsSetService;
    }
    create(createJobPostSkillsSetDto) {
        return this.jobPostSkillsSetService.create(createJobPostSkillsSetDto);
    }
    findAll() {
        return this.jobPostSkillsSetService.findAll();
    }
    findOne(id) {
        return this.jobPostSkillsSetService.findOne(+id);
    }
    update(id, updateJobPostSkillsSetDto) {
        return this.jobPostSkillsSetService.update(+id, updateJobPostSkillsSetDto);
    }
    remove(id) {
        return this.jobPostSkillsSetService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_post_skills_set_dto_1.CreateJobPostSkillsSetDto]),
    __metadata("design:returntype", void 0)
], JobPostSkillsSetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobPostSkillsSetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobPostSkillsSetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_job_post_skills_set_dto_1.UpdateJobPostSkillsSetDto]),
    __metadata("design:returntype", void 0)
], JobPostSkillsSetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobPostSkillsSetController.prototype, "remove", null);
JobPostSkillsSetController = __decorate([
    (0, common_1.Controller)('job-post-skills-set'),
    __metadata("design:paramtypes", [job_post_skills_set_service_1.JobPostSkillsSetService])
], JobPostSkillsSetController);
exports.JobPostSkillsSetController = JobPostSkillsSetController;
//# sourceMappingURL=job-post-skills-set.controller.js.map