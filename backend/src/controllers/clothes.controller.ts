import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ClothesService } from '../use-cases/clothes/clothes.service';
import { CreateClotheDto } from '../core/dto/clothe.dto';
import { clothes } from 'src/core/entities/clothe.entity';

@Controller('clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @Post()
  async create(@Body() createClotheDto: CreateClotheDto): Promise<clothes> {
    return this.clothesService.create(createClotheDto);
  }

  @Get('/getAll')
  async getAll(): Promise<clothes[]> {
    return await this.clothesService.getAll();
  }
  @Get(':id')
  async getOneById(@Param('id', ParseIntPipe) id: number): Promise<clothes> {
    return await this.clothesService.getOneById(id);
  }
  @Patch(':id')
  async updateClothe(
    @Param('id', ParseIntPipe) id: number,
    @Body() newClotheDto: CreateClotheDto,
  ): Promise<clothes> {
    return await this.clothesService.update(id, newClotheDto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.clothesService.delete(id);
  }
}
