import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Users } from 'src/core/entities/users.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  private matchRoles(roles: string[], userRoles: string[]): boolean {
    return roles.some((role) => userRoles.includes(role));
  }
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('admin', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: Users = request.user;
    if (!user) {
      // handle the case where user is undefined
      // for example, throw an error or return false
      throw new Error('User not found');
    }
    console.log(user);
    return this.matchRoles(roles, [user.role]);
  }
}
