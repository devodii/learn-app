import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export abstract class BaseInterceptor implements NestInterceptor {
  abstract checkRequest(context: ExecutionContext): boolean;

  abstract throwForbiddenException(): void;

  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> {
    if (!this.checkRequest(context)) {
      this.throwForbiddenException();
    }
    return handler.handle();
  }
}
