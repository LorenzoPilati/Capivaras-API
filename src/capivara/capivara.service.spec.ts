import { Test, TestingModule } from '@nestjs/testing';
import { CapivaraService } from './capivara.service';

describe('CapivaraService', () => {
  let service: CapivaraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapivaraService],
    }).compile();

    service = module.get<CapivaraService>(CapivaraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
