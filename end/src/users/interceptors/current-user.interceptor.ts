import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseInterceptor } from './base.interceptor';
import { AccountService } from '../services';

@Injectable()
export class CurrentUserInterceptor extends BaseInterceptor {
  constructor(private userService: AccountService) {
    super(); // derived class should call super.
  }

  checkRequest(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session;

    if (userId) {
      const user = this.userService.findOne('id', userId);
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
