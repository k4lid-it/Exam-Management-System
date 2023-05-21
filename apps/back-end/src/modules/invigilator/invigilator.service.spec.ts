import { Test, TestingModule } from '@nestjs/testing';
import { InvigilatorService } from './invigilator.service';

describe('InvigilatorService', () => {
  let service: InvigilatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvigilatorService],
    }).compile();

    service = module.get<InvigilatorService>(InvigilatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
