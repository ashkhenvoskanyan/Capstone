"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompanyImageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_company_image_dto_1 = require("./create-company-image.dto");
class UpdateCompanyImageDto extends (0, mapped_types_1.PartialType)(create_company_image_dto_1.CreateCompanyImageDto) {
}
exports.UpdateCompanyImageDto = UpdateCompanyImageDto;
//# sourceMappingURL=update-company-image.dto.js.map