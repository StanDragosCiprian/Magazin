import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TvService } from 'src/use-cases/tv/tv.service';
import { CreateTvDto } from 'src/core/dto/tv.dto';
import { tv } from 'src/core/entities/tv.entity';
import { CookieGuard } from 'src/auth/role.guard';
@Controller('tv')
export class TvController {
  constructor(private tvService: TvService) {}

  @Post('/new')
  @UseGuards(CookieGuard)
  async create(@Body() createTvDto: CreateTvDto): Promise<tv> {
    return this.tvService.create(createTvDto);
  }
  @Get('/getAll')
  async getAll(): Promise<tv[]> {
    return await this.tvService.getAll();
  }
  @Get(':id')
  async getOneById(@Param('id') id: number): Promise<tv> {
    return await this.tvService.getOneById(id);
  }
  @Post(':id')
  @UseGuards(CookieGuard)
  async updateTv(
    @Param('id') id: number,
    @Body() newTvDto: CreateTvDto,
  ): Promise<tv> {
    return await this.tvService.update(id, newTvDto);
  }
  @Post('delete/:id')
  @UseGuards(CookieGuard)
  async delete(@Param('id') id: number): Promise<number> {
    return await this.tvService.delete(id);
  }
}
