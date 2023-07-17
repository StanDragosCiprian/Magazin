import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ClothesService } from '../use-cases/clothes/clothes.service';
import { CreateClotheDto } from '../core/dto/clothe.dto';
import { clothes } from 'src/core/entities/clothe.entity';
import { CookieGuard } from 'src/auth/role.guard';
@Controller('clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @Post('new')
  @UseGuards(CookieGuard)
  async create(@Body() createClotheDto: CreateClotheDto): Promise<clothes> {
    return this.clothesService.create(createClotheDto);
  }

  @Get('/getAll')
  async getAll(): Promise<clothes[]> {
    return await this.clothesService.getAll();
  }
  @Get(':id')
  async getOneById(@Param('id') id: number): Promise<clothes> {
    return await this.clothesService.getByCondition({ product_id: id });
  }
  @Get('get/:name')
  async getOneByName(@Param('name') name: string): Promise<clothes> {
    return await this.clothesService.getByCondition({ name: name });
  }

  @Post(':id')
  @UseGuards(CookieGuard)
  async updateClothe(
    @Param('id') id: number,
    @Body() newClotheDto: CreateClotheDto,
  ): Promise<clothes> {
    return await this.clothesService.update(id, newClotheDto);
  }
  @Post('delete/:id')
  @UseGuards(CookieGuard)
  async delete(@Param('id') id: number): Promise<number> {
    return await this.clothesService.delete(id);
  }
}
