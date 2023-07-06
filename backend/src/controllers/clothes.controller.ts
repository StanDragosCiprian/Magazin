import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ClothesService } from '../use-cases/clothes/clothes.service';
import { CreateClotheDto } from '../core/dto/clothe.dto';
import { clothes } from 'src/core/entities/clothe.entity';
import { CookieGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
@Controller('clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @Post()
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async create(@Body() createClotheDto: CreateClotheDto): Promise<clothes> {
    return this.clothesService.create(createClotheDto);
  }

  @Get('/getAll')
  async getAll(): Promise<clothes[]> {
    return await this.clothesService.getAll();
  }
  @Get(':name')
  async getOneById(@Param('name') name: string): Promise<clothes> {
    return await this.clothesService.getOneById(name);
  }
  @Post(':name')
  // @Roles(Role.Admin)
  // @UseGuards(CookieGuard)
  async updateClothe(
    @Param('name') name: string,
    @Body() newClotheDto: CreateClotheDto,
  ): Promise<clothes> {
    console.log(name);
    return await this.clothesService.update(name, newClotheDto);
  }
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.clothesService.delete(id);
  }
}
