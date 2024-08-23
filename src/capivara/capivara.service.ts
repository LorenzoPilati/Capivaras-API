import { Injectable } from '@nestjs/common';
import { CreateCapivaraDto } from './dto/create-capivara.dto';
import { UpdateCapivaraDto } from './dto/update-capivara.dto';
import { Repository } from 'typeorm';
import { Capivara } from './entities/capivara.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CapivaraService {
  constructor(
    @InjectRepository(Capivara)
    private capivaraRepository: Repository<Capivara>){}

  create(createCapivaraDto: CreateCapivaraDto) {
    this.capivaraRepository.create(createCapivaraDto);
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
