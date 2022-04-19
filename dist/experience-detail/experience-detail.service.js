"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const experience_detail_entity_1 = require("./entities/experience-detail.entity");
let ExperienceDetailService = class ExperienceDetailService {
    async create(createExperienceDetailDto) {
        const { is_current_job, start_date, end_date, job_title, company_name, description } = createExperienceDetailDto;
        const ExperienceRepo = (0, typeorm_1.getManager)().getRepository(experience_detail_entity_1.ExperienceDetail);
        const experience = ExperienceRepo.create({
            is_current_job,
            start_date,
            end_date,
            job_title,
            company_name,
            description
        });
        await ExperienceRepo.save(experience);
        return experience;
    }
    findAll() {
        return `This action returns all experienceDetail`;
    }
    findOne(id) {
        return `This action returns a #${id} experienceDetail`;
    }
    update(id, updateExperienceDetailDto) {
        return `This action updates a #${id} experienceDetail`;
    }
    remove(id) {
        return `This action removes a #${id} experienceDetail`;
    }
};
ExperienceDetailService = __decorate([
    (0, common_1.Injectable)()
], ExperienceDetailService);
exports.ExperienceDetailService = ExperienceDetailService;
//# sourceMappingURL=experience-detail.service.js.map