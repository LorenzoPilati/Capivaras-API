import { Test, TestingModule } from '@nestjs/testing';
import { CapivaraController } from './capivara.controller';
import { CapivaraService } from './capivara.service';

describe('CapivaraController', () => {
  let controller: CapivaraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapivaraController],
      providers: [CapivaraService],
    }).compile();

    controller = module.get<CapivaraController>(CapivaraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
