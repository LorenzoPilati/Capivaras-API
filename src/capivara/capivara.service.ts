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

    async create(createCapivaraDto: CreateCapivaraDto) {
      const capivara = this.capivaraRepository.create(createCapivaraDto);
      return await this.capivaraRepository.save(capivara);
    }

    async findAll() {
      return await this.capivaraRepository.find();
    }

    async findOne(id: number) {
      return await this.capivaraRepository.findOneBy({id});
    }

    async update(id: number, updateCapivaraDto: UpdateCapivaraDto) {
      return await this.capivaraRepository.update(id, updateCapivaraDto);
    }

    async remove(id: number) {
      return await this.capivaraRepository.delete(id);
    }
  }
