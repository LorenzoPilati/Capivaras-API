import { Module } from '@nestjs/common';
import { CapivaraService } from './capivara.service';
import { CapivaraController } from './capivara.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capivara } from './entities/capivara.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Capivara])],
  controllers: [CapivaraController],
  providers: [CapivaraService],
})
export class CapivaraModule {}
