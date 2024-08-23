import { Injectable } from '@nestjs/common';
import { CreateCapivaraDto } from './dto/create-capivara.dto';
import { UpdateCapivaraDto } from './dto/update-capivara.dto';

@Injectable()
export class CapivaraService {
  create(createCapivaraDto: CreateCapivaraDto) {
    return 'This action adds a new capivara';
  }

  findAll() {
    return `This action returns all capivara`;
  }

  findOne(id: number) {
    return `This action returns a #${id} capivara`;
  }

  update(id: number, updateCapivaraDto: UpdateCapivaraDto) {
    return `This action updates a #${id} capivara`;
  }

  remove(id: number) {
    return `This action removes a #${id} capivara`;
  }
}
