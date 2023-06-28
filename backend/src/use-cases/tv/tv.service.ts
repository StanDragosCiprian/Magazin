import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTvDto } from 'src/core/dto/tv.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tv } from 'src/core/entities/tv.entity';
@Injectable()
export class TvService {
  constructor(@InjectRepository(tv) private tvRepository: Repository<tv>) {}
  async create(createTvDto: CreateTvDto): Promise<tv> {
    const createTv = this.tvRepository.create(createTvDto);
    return this.tvRepository.save(createTv);
  }
  async getAll(): Promise<tv[]> {
    return await this.tvRepository.find();
  }
  async getOneById(id: number): Promise<tv> {
    try {
      return await this.tvRepository.findOneOrFail({
        where: { tv_id: id },
      });
    } catch (err) {
      console.log('Get one tv by id error: ', err.message ?? err);
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
  async update(id: number, newTv: CreateTvDto): Promise<tv> {
    let foundTv = await this.tvRepository.findOneBy({ tv_id: id });

    if (!foundTv) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    foundTv = { ...foundTv, ...newTv };
    return await this.tvRepository.save(foundTv);
  }
  async delete(id: number): Promise<number> {
    const foundTv = await this.tvRepository.findOneBy({ tv_id: id });

    if (!foundTv) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    await this.tvRepository.delete(id);
    return foundTv.tv_id;
  }
}
