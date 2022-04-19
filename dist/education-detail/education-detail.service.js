"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const education_detail_entity_1 = require("./entities/education-detail.entity");
let EducationDetailService = class EducationDetailService {
    async create(createEducationDetailDto) {
        const { certification_degree_name, major, university_name, starting_date, completion_date } = createEducationDetailDto;
        const EducationRepo = (0, typeorm_1.getManager)().getRepository(education_detail_entity_1.EducationDetail);
        const education = EducationRepo.create({
            certification_degree_name,
            major,
            university_name,
            starting_date,
            completion_date
        });
        await EducationRepo.save(education);
        return education;
    }
    findAll() {
        return `This action returns all educationDetail`;
    }
    findOne(id) {
        return `This action returns a #${id} educationDetail`;
    }
    update(id, updateEducationDetailDto) {
        return `This action updates a #${id} educationDetail`;
    }
    remove(id) {
        return `This action removes a #${id} educationDetail`;
    }
};
EducationDetailService = __decorate([
    (0, common_1.Injectable)()
], EducationDetailService);
exports.EducationDetailService = EducationDetailService;
//# sourceMappingURL=education-detail.service.js.map