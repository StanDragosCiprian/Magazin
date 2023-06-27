import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClothesService } from '../use-cases/clothes/clothes.service';
import { CreateClotheDto } from '../core/dto/create-clothe.dto';
import { UpdateClotheDto } from '../core/dto/update-clothe.dto';
import { clothes } from 'src/core/entities/clothe.entity';

@Controller('clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @Post()
  async create(@Body() createClotheDto: CreateClotheDto): Promise<clothes> {
    return this.clothesService.create(createClotheDto);
  }

  @Get()
  findAll() {
    return this.clothesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clothesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClotheDto: UpdateClotheDto) {
    return this.clothesService.update(+id, updateClotheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clothesService.remove(+id);
  }
}
