"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExperienceDetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_experience_detail_dto_1 = require("./create-experience-detail.dto");
class UpdateExperienceDetailDto extends (0, mapped_types_1.PartialType)(create_experience_detail_dto_1.CreateExperienceDetailDto) {
}
exports.UpdateExperienceDetailDto = UpdateExperienceDetailDto;
//# sourceMappingURL=update-experience-detail.dto.js.map