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
exports.JobTypeController = void 0;
const common_1 = require("@nestjs/common");
const job_type_service_1 = require("./job-type.service");
const create_job_type_dto_1 = require("./dto/create-job-type.dto");
const update_job_type_dto_1 = require("./dto/update-job-type.dto");
let JobTypeController = class JobTypeController {
    constructor(jobTypeService) {
        this.jobTypeService = jobTypeService;
    }
    create(createJobTypeDto) {
        return this.jobTypeService.create(createJobTypeDto);
    }
    findAll() {
        return this.jobTypeService.findAll();
    }
    findOne(id) {
        return this.jobTypeService.findOne(+id);
    }
    update(id, updateJobTypeDto) {
        return this.jobTypeService.update(+id, updateJobTypeDto);
    }
    remove(id) {
        return this.jobTypeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_type_dto_1.CreateJobTypeDto]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_job_type_dto_1.UpdateJobTypeDto]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "remove", null);
JobTypeController = __decorate([
    (0, common_1.Controller)('job-type'),
    __metadata("design:paramtypes", [job_type_service_1.JobTypeService])
], JobTypeController);
exports.JobTypeController = JobTypeController;
//# sourceMappingURL=job-type.controller.js.map