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
exports.BussinessStreamController = void 0;
const common_1 = require("@nestjs/common");
const bussiness_stream_service_1 = require("./bussiness-stream.service");
const create_bussiness_stream_dto_1 = require("./dto/create-bussiness-stream.dto");
const update_bussiness_stream_dto_1 = require("./dto/update-bussiness-stream.dto");
let BussinessStreamController = class BussinessStreamController {
    constructor(bussinessStreamService) {
        this.bussinessStreamService = bussinessStreamService;
    }
    create(createBussinessStreamDto) {
        return this.bussinessStreamService.create(createBussinessStreamDto);
    }
    findAll() {
        return this.bussinessStreamService.findAll();
    }
    findOne(id) {
        return this.bussinessStreamService.findOne(+id);
    }
    update(id, updateBussinessStreamDto) {
        return this.bussinessStreamService.update(+id, updateBussinessStreamDto);
    }
    remove(id) {
        return this.bussinessStreamService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bussiness_stream_dto_1.CreateBussinessStreamDto]),
    __metadata("design:returntype", void 0)
], BussinessStreamController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BussinessStreamController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BussinessStreamController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bussiness_stream_dto_1.UpdateBussinessStreamDto]),
    __metadata("design:returntype", void 0)
], BussinessStreamController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BussinessStreamController.prototype, "remove", null);
BussinessStreamController = __decorate([
    (0, common_1.Controller)('bussiness-stream'),
    __metadata("design:paramtypes", [bussiness_stream_service_1.BussinessStreamService])
], BussinessStreamController);
exports.BussinessStreamController = BussinessStreamController;
//# sourceMappingURL=bussiness-stream.controller.js.map