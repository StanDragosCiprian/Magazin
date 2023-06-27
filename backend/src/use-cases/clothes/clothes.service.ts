import { Injectable } from '@nestjs/common';
import { CreateClotheDto } from '../../core/dto/create-clothe.dto';
import { UpdateClotheDto } from '../../core/dto/update-clothe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { clothes } from 'src/core/entities/clothe.entity';
@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(clothes) private clotheRepository: Repository<clothes>,
  ) {}
  async create(createClotheDto: CreateClotheDto): Promise<clothes> {
    const createClothe = this.clotheRepository.create(createClotheDto);
    return this.clotheRepository.save(createClothe);
  }

  findAll() {
    return `This action returns all clothes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clothe`;
  }

  update(id: number, updateClotheDto: UpdateClotheDto) {
    return `This action updates a #${id} clothe`;
  }

  remove(id: number) {
    return `This action removes a #${id} clothe`;
  }
}
