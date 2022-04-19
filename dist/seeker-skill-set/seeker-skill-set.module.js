"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeekerSkillSetModule = void 0;
const common_1 = require("@nestjs/common");
const seeker_skill_set_service_1 = require("./seeker-skill-set.service");
const seeker_skill_set_controller_1 = require("./seeker-skill-set.controller");
let SeekerSkillSetModule = class SeekerSkillSetModule {
};
SeekerSkillSetModule = __decorate([
    (0, common_1.Module)({
        controllers: [seeker_skill_set_controller_1.SeekerSkillSetController],
        providers: [seeker_skill_set_service_1.SeekerSkillSetService]
    })
], SeekerSkillSetModule);
exports.SeekerSkillSetModule = SeekerSkillSetModule;
//# sourceMappingURL=seeker-skill-set.module.js.map