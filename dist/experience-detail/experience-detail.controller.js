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
exports.ExperienceDetailController = void 0;
const common_1 = require("@nestjs/common");
const experience_detail_service_1 = require("./experience-detail.service");
const create_experience_detail_dto_1 = require("./dto/create-experience-detail.dto");
const update_experience_detail_dto_1 = require("./dto/update-experience-detail.dto");
let ExperienceDetailController = class ExperienceDetailController {
    constructor(experienceDetailService) {
        this.experienceDetailService = experienceDetailService;
    }
    create(createExperienceDetailDto) {
        return this.experienceDetailService.create(createExperienceDetailDto);
    }
    findAll() {
        return this.experienceDetailService.findAll();
    }
    findOne(id) {
        return this.experienceDetailService.findOne(+id);
    }
    update(id, updateExperienceDetailDto) {
        return this.experienceDetailService.update(+id, updateExperienceDetailDto);
    }
    remove(id) {
        return this.experienceDetailService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/experience'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_experience_detail_dto_1.CreateExperienceDetailDto]),
    __metadata("design:returntype", void 0)
], ExperienceDetailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExperienceDetailController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperienceDetailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_experience_detail_dto_1.UpdateExperienceDetailDto]),
    __metadata("design:returntype", void 0)
], ExperienceDetailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperienceDetailController.prototype, "remove", null);
ExperienceDetailController = __decorate([
    (0, common_1.Controller)('experience-detail'),
    __metadata("design:paramtypes", [experience_detail_service_1.ExperienceDetailService])
], ExperienceDetailController);
exports.ExperienceDetailController = ExperienceDetailController;
//# sourceMappingURL=experience-detail.controller.js.map