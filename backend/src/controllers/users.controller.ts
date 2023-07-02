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
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/sign')
  async create(@Body() createUserDto: CreateUsersDto): Promise<number> {
    const user = await this.usersService.create(createUserDto);
    const id = user.users_id;
    return id;
  }
  @Get('/getAll')
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async getAll(): Promise<Users[]> {
    return await this.usersService.getAll();
  }
  @Post(':log')
  async logIn(@Body() { email, password }: CreateUsersDto): Promise<number> {
    const emailSave = await this.usersService.getOneByCondition({
      email: email,
    });
    const passwordSave = await this.usersService.getOneByCondition({
      password: password,
    });
    if (emailSave === passwordSave) {
      return emailSave;
    }
  }
  @Get(':id')
  async getOneById(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.usersService.getOneByCondition({ user_id: id });
  }
  @Patch(':id')
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserDto: CreateUsersDto,
  ): Promise<Users> {
    return await this.usersService.update(id, newUserDto);
  }
  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(CookieGuard)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.usersService.delete(id);
  }
}
