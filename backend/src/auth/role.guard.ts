import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Users } from 'src/core/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CookieGuard implements CanActivate {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private reflector: Reflector,
  ) {}
  async getOneById(id: number): Promise<Users> {
    try {
      return await this.usersRepository.findOneOrFail({
        where: { users_id: id },
      });
    } catch (err) {
      console.log('Get one user by id error: ', err.message ?? err);
      throw new HttpException(
        `User with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookieValue = request.cookies['id'];
    console.log(cookieValue);
    const user = await this.getOneById(3);
    const role = user.role;
    console.log(user.email);
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles[0]);
    if (role === roles[0]) {
      return true;
    } else {
      return false;
    }
  }
}
