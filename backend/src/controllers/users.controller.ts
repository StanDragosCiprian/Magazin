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
import { UsersService } from 'src/use-cases/users/users.service';

import { CreateUsersDto } from 'src/core/dto/users.dto';
import { Users } from 'src/core/entities/users.entity';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
}
