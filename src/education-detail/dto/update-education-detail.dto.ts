import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDetailDto } from './create-education-detail.dto';

export class UpdateEducationDetailDto extends PartialType(CreateEducationDetailDto) {}
