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
import { UsersService } from 'src/use-cases/users/users.service';
import { CreateUsersDto } from 'src/core/dto/users.dto';
import { Users } from 'src/core/entities/users.entity';
import { CookieGuard } from 'src/auth/role.guard';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/send')
  @UseGuards(CookieGuard)
  async create(@Body() createUserDto: CreateUsersDto): Promise<number> {
    const user = await this.usersService.create(createUserDto);
    const id = user.users_id;
    return id;
  }
  @Get('/getAll')
  async getAll(): Promise<Users[]> {
    return await this.usersService.getAll();
  }
  @Get(':id')
  async getOneById(@Param('id', ParseIntPipe) id: number): Promise<Users> {
    return await this.usersService.getOneById(id);
  }
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserDto: CreateUsersDto,
  ): Promise<Users> {
    return await this.usersService.update(id, newUserDto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.usersService.delete(id);
  }
}
