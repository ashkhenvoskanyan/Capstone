"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobLocationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_job_location_dto_1 = require("./create-job-location.dto");
class UpdateJobLocationDto extends (0, mapped_types_1.PartialType)(create_job_location_dto_1.CreateJobLocationDto) {
}
exports.UpdateJobLocationDto = UpdateJobLocationDto;
//# sourceMappingURL=update-job-location.dto.js.map