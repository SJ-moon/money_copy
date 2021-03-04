import { Test, TestingModule } from '@nestjs/testing';
import { SellingController } from '../selling.controller';

describe('SellingController', () => {
  let controller: SellingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellingController],
    }).compile();

    controller = module.get<SellingController>(SellingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
