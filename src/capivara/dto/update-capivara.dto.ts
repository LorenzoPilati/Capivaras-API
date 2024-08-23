import { PartialType } from '@nestjs/mapped-types';
import { CreateCapivaraDto } from './create-capivara.dto';

export class UpdateCapivaraDto extends PartialType(CreateCapivaraDto) {}
