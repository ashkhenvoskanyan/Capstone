import { Test, TestingModule } from '@nestjs/testing';
import { EducationDetailService } from './education-detail.service';

describe('EducationDetailService', () => {
  let service: EducationDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationDetailService],
    }).compile();

    service = module.get<EducationDetailService>(EducationDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
