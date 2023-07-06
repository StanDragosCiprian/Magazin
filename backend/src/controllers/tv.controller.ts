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
import { TvService } from 'src/use-cases/tv/tv.service';
import { CreateTvDto } from 'src/core/dto/tv.dto';
import { tv } from 'src/core/entities/tv.entity';
import { CookieGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
@Controller('tv')
export class TvController {
  constructor(private tvService: TvService) {}

  @Post('/send')
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async create(@Body() createTvDto: CreateTvDto): Promise<tv> {
    return this.tvService.create(createTvDto);
  }
  @Get('/getAll')
  async getAll(): Promise<tv[]> {
    return await this.tvService.getAll();
  }
  @Get(':id')
  async getOneById(@Param('id', ParseIntPipe) id: number): Promise<tv> {
    return await this.tvService.getOneById(id);
  }
  @Patch(':name')
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async updateTv(
    @Param('name', ParseIntPipe) name: string,
    @Body() newTvDto: CreateTvDto,
  ): Promise<tv> {
    return await this.tvService.update(name, newTvDto);
  }
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.tvService.delete(id);
  }
}
