import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateClotheDto } from '../../core/dto/clothe.dto';
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
  async getAll(): Promise<clothes[]> {
    return await this.clotheRepository.find();
  }
  async getOneById(id: number): Promise<clothes> {
    try {
      return await this.clotheRepository.findOneOrFail({
        where: { clothe_id: id },
      });
    } catch (err) {
      console.log('Get one clothe by id error: ', err.message ?? err);
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
  async update(id: number, newClothe: CreateClotheDto): Promise<clothes> {
    let foundClothe = await this.clotheRepository.findOneBy({ clothe_id: id });

    if (!foundClothe) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    foundClothe = { ...foundClothe, ...newClothe };
    return await this.clotheRepository.save(foundClothe);
  }
  async delete(id: number): Promise<number> {
    const foundClothe = await this.clotheRepository.findOneBy({
      clothe_id: id,
    });

    if (!foundClothe) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    await this.clotheRepository.delete(id);
    return foundClothe.clothe_id;
  }
}
