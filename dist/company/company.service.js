"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./entities/company.entity");
let CompanyService = class CompanyService {
    async create(createCompanyDto) {
        const { company_name, profile_description, establishment_date, company_website_url } = createCompanyDto;
        const CompanyRepo = (0, typeorm_1.getManager)().getRepository(company_entity_1.Company);
        const company = CompanyRepo.create({
            company_name,
            profile_description,
            establishment_date,
            company_website_url
        });
        await CompanyRepo.save(company);
        return company;
    }
    findAll() {
        return `This action returns all company`;
    }
    findOne(id) {
        return `This action returns a #${id} company`;
    }
    update(id, updateCompanyDto) {
        return `This action updates a #${id} company`;
    }
    remove(id) {
        return `This action removes a #${id} company`;
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)()
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map