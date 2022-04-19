"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeekerProfileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seeker_profile_dto_1 = require("./create-seeker-profile.dto");
class UpdateSeekerProfileDto extends (0, mapped_types_1.PartialType)(create_seeker_profile_dto_1.CreateSeekerProfileDto) {
}
exports.UpdateSeekerProfileDto = UpdateSeekerProfileDto;
//# sourceMappingURL=update-seeker-profile.dto.js.map