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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationDetail = void 0;
const typeorm_1 = require("typeorm");
let EducationDetail = class EducationDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EducationDetail.prototype, "user_accoumt_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EducationDetail.prototype, "certification_degree_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EducationDetail.prototype, "major", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EducationDetail.prototype, "university_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EducationDetail.prototype, "starting_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EducationDetail.prototype, "completion_date", void 0);
EducationDetail = __decorate([
    (0, typeorm_1.Entity)('education_detail')
], EducationDetail);
exports.EducationDetail = EducationDetail;
//# sourceMappingURL=education-detail.entity.js.map