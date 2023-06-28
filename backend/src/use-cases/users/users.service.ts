import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/core/entities/users.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private tvRepository: Repository<Users>,
  ) {}
}
