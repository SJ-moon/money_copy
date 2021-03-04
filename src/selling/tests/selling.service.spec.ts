import { Test, TestingModule } from '@nestjs/testing';
import { SellingService } from '../selling.service';

describe('SellingService', () => {
  let service: SellingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellingService],
    }).compile();

    service = module.get<SellingService>(SellingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
