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
exports.CompanyImageController = void 0;
const common_1 = require("@nestjs/common");
const company_image_service_1 = require("./company-image.service");
const create_company_image_dto_1 = require("./dto/create-company-image.dto");
const update_company_image_dto_1 = require("./dto/update-company-image.dto");
let CompanyImageController = class CompanyImageController {
    constructor(companyImageService) {
        this.companyImageService = companyImageService;
    }
    create(createCompanyImageDto) {
        return this.companyImageService.create(createCompanyImageDto);
    }
    findAll() {
        return this.companyImageService.findAll();
    }
    findOne(id) {
        return this.companyImageService.findOne(+id);
    }
    update(id, updateCompanyImageDto) {
        return this.companyImageService.update(+id, updateCompanyImageDto);
    }
    remove(id) {
        return this.companyImageService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_image_dto_1.CreateCompanyImageDto]),
    __metadata("design:returntype", void 0)
], CompanyImageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyImageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyImageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_company_image_dto_1.UpdateCompanyImageDto]),
    __metadata("design:returntype", void 0)
], CompanyImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyImageController.prototype, "remove", null);
CompanyImageController = __decorate([
    (0, common_1.Controller)('company-image'),
    __metadata("design:paramtypes", [company_image_service_1.CompanyImageService])
], CompanyImageController);
exports.CompanyImageController = CompanyImageController;
//# sourceMappingURL=company-image.controller.js.map