import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class CookieGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookieValue = request.cookies['id'];

    if (Number(cookieValue) === 8923238.2289127) {
      return true;
    } else {
      return false;
    }
  }
}
