"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEducationDetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_education_detail_dto_1 = require("./create-education-detail.dto");
class UpdateEducationDetailDto extends (0, mapped_types_1.PartialType)(create_education_detail_dto_1.CreateEducationDetailDto) {
}
exports.UpdateEducationDetailDto = UpdateEducationDetailDto;
//# sourceMappingURL=update-education-detail.dto.js.map