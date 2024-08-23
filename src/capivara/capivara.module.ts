import { Module } from '@nestjs/common';
import { CapivaraService } from './capivara.service';
import { CapivaraController } from './capivara.controller';

@Module({
  controllers: [CapivaraController],
  providers: [CapivaraService],
})
export class CapivaraModule {}
