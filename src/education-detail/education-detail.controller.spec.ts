import { Test, TestingModule } from '@nestjs/testing';
import { EducationDetailController } from './education-detail.controller';
import { EducationDetailService } from './education-detail.service';

describe('EducationDetailController', () => {
  let controller: EducationDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationDetailController],
      providers: [EducationDetailService],
    }).compile();

    controller = module.get<EducationDetailController>(EducationDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
