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
exports.SeekerSkillSetController = void 0;
const common_1 = require("@nestjs/common");
const seeker_skill_set_service_1 = require("./seeker-skill-set.service");
const create_seeker_skill_set_dto_1 = require("./dto/create-seeker-skill-set.dto");
const update_seeker_skill_set_dto_1 = require("./dto/update-seeker-skill-set.dto");
let SeekerSkillSetController = class SeekerSkillSetController {
    constructor(seekerSkillSetService) {
        this.seekerSkillSetService = seekerSkillSetService;
    }
    create(createSeekerSkillSetDto) {
        return this.seekerSkillSetService.create(createSeekerSkillSetDto);
    }
    findAll() {
        return this.seekerSkillSetService.findAll();
    }
    findOne(id) {
        return this.seekerSkillSetService.findOne(+id);
    }
    update(id, updateSeekerSkillSetDto) {
        return this.seekerSkillSetService.update(+id, updateSeekerSkillSetDto);
    }
    remove(id) {
        return this.seekerSkillSetService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seeker_skill_set_dto_1.CreateSeekerSkillSetDto]),
    __metadata("design:returntype", void 0)
], SeekerSkillSetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeekerSkillSetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeekerSkillSetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_seeker_skill_set_dto_1.UpdateSeekerSkillSetDto]),
    __metadata("design:returntype", void 0)
], SeekerSkillSetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeekerSkillSetController.prototype, "remove", null);
SeekerSkillSetController = __decorate([
    (0, common_1.Controller)('seeker-skill-set'),
    __metadata("design:paramtypes", [seeker_skill_set_service_1.SeekerSkillSetService])
], SeekerSkillSetController);
exports.SeekerSkillSetController = SeekerSkillSetController;
//# sourceMappingURL=seeker-skill-set.controller.js.map