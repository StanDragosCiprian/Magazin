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
  async getByCondition(condition: object): Promise<clothes> {
    try {
      const user = await this.clotheRepository.findOneOrFail({
        where: condition,
      });
      return user;
    } catch (err) {
      throw new HttpException(`User not found.`, HttpStatus.NOT_FOUND);
    }
  }
  async update(id: number, newClothe: CreateClotheDto): Promise<clothes> {
    let foundClothe = await this.clotheRepository.findOneBy({ product_id: id });

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
      product_id: id,
    });

    if (!foundClothe) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    await this.clotheRepository.delete(id);
    return foundClothe.product_id;
  }
}
