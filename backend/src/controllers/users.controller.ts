import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from 'src/use-cases/users/users.service';
import { CreateUsersDto } from 'src/core/dto/users.dto';
import { Users } from 'src/core/entities/users.entity';
import { CookieGuard } from 'src/auth/role.guard';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  @Post('/sign')
  async create(
    @Body() createUserDto: CreateUsersDto,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.create(createUserDto);

    const payload = { sub: user.users_id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  @Get('/getAll')
  @UseGuards(CookieGuard)
  async getAll(): Promise<Users[]> {
    return await this.usersService.getAll();
  }
  @Post(':log')
  async logIn(
    @Body() { email, password }: CreateUsersDto,
  ): Promise<{ access_token: string }> {
    const emailSave: number = await this.usersService.getOneByCondition({
      email,
    });
    const passwordSave = await this.usersService.getOneByCondition({
      password,
    });
    const userRole = await this.usersService.getRole(emailSave);

    if (emailSave === passwordSave) {
      if (userRole === 'admin') {
        const payload = { sub: emailSave, role: userRole };
        const access_token = await this.jwtService.signAsync(payload);
        return { access_token };
      } else {
        const payload = { sub: emailSave };
        const access_token = await this.jwtService.signAsync(payload);
        return { access_token };
      }
    }
  }
  @Get(':id')
  async getOneById(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.usersService.getOneByCondition({ user_id: id });
  }

  @Get('/newOrder/:name')
  async newOrder(
    @Param('name') name: string,
    @Req() req: Request,
  ): Promise<Users> {
    const id = req.cookies;
    return this.usersService.newOrder(id, name);
  }

  @Post(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserDto: CreateUsersDto,
  ): Promise<Users> {
    return await this.usersService.update(id, newUserDto);
  }
  @Delete(':id')
  @UseGuards(CookieGuard)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.usersService.delete(id);
  }
}
