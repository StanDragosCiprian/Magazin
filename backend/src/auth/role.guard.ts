import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Users } from 'src/core/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CookieGuard implements CanActivate {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async getOneById(id: number): Promise<Users> {
    try {
      return await this.userRepository.findOneOrFail({
        where: { users_id: id },
      });
    } catch (err) {
      console.log('Get one user by id error: ', err.message ?? err);
    }
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookieValue = request.cookies['id'];
    const request2 = context.switchToHttp().getRequest();
    const userId = request.params.id;
    console.log(cookieValue);
    const user = this.getOneById(cookieValue);

    console.log((await user).email);
    if (cookieValue === 'some-value') {
      return true;
    } else {
      return false;
    }
  }
}
