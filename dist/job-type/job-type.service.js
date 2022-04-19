"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobTypeService = void 0;
const common_1 = require("@nestjs/common");
let JobTypeService = class JobTypeService {
    create(createJobTypeDto) {
        return 'This action adds a new jobType';
    }
    findAll() {
        return `This action returns all jobType`;
    }
    findOne(id) {
        return `This action returns a #${id} jobType`;
    }
    update(id, updateJobTypeDto) {
        return `This action updates a #${id} jobType`;
    }
    remove(id) {
        return `This action removes a #${id} jobType`;
    }
};
JobTypeService = __decorate([
    (0, common_1.Injectable)()
], JobTypeService);
exports.JobTypeService = JobTypeService;
//# sourceMappingURL=job-type.service.js.map