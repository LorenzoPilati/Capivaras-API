import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CapivaraService } from './capivara.service';
import { CreateCapivaraDto } from './dto/create-capivara.dto';
import { UpdateCapivaraDto } from './dto/update-capivara.dto';

@Controller('capivaras')
export class CapivaraController {
  constructor(private readonly capivaraService: CapivaraService) {}

  @Post()
  create(@Body() createCapivaraDto: CreateCapivaraDto) {
    return this.capivaraService.create(createCapivaraDto);
  }

  @Get()
  findAll() {
    return this.capivaraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capivaraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapivaraDto: UpdateCapivaraDto) {
    return this.capivaraService.update(+id, updateCapivaraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capivaraService.remove(+id);
  }
}
