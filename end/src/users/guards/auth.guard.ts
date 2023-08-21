import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session;
    if (userId) return true;
    throw new UnauthorizedException('Not Authenticated. Please, signin!', {
      cause: 'User not authenticated',
    });
  }
}
