import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseInterceptor } from './base.interceptor';
import { UsersService } from '../services';

@Injectable()
export class CurrentUserInterceptor extends BaseInterceptor {
  constructor(private userService: UsersService) {
    super(); // all derived class needs to call super.
  }

  checkRequest(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session;

    if (userId) {
      const user = this.userService.findById(userId);
      request.currentUser = user;

      return !!user; // convert user return type to a boolean as expected
    }
  }

  throwForbiddenException(): void {
    throw new UnauthorizedException(
      'Cannot look up that user, No session provided :(',
    );
  }
}

export {};
