"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSkillSetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_skill_set_dto_1 = require("./create-skill-set.dto");
class UpdateSkillSetDto extends (0, mapped_types_1.PartialType)(create_skill_set_dto_1.CreateSkillSetDto) {
}
exports.UpdateSkillSetDto = UpdateSkillSetDto;
//# sourceMappingURL=update-skill-set.dto.js.map