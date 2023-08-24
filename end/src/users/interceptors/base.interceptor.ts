import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Abstract base interceptor class that provides a consistent pattern
 * for interceptors that require custom request checking and error handling.
 */
@Injectable()
export abstract class BaseInterceptor implements NestInterceptor {
  /**
   * Implement this method to perform custom checks on the incoming request.
   * Return `true` if the request is valid, otherwise return `false`.
   * @param context - The execution context containing the request object.
   * @returns `true` if the request is valid, otherwise `false`.
   */
  abstract checkRequest(context: ExecutionContext): boolean;

  /**
   * Implement this method to throw a Forbidden exception when the request
   * does not pass the validation checks.
   */
  abstract throwForbiddenException(): void;

  /**
   * Intercepts the incoming request and handles it based on the result of
   * the custom checks performed in the `checkRequest` method.
   * @param context - The execution context containing the request object.
   * @param handler - The CallHandler to proceed with request handling.
   * @returns An Observable representing the response.
   */
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> {
    // Check the incoming request using the custom checkRequest method.
    if (!this.checkRequest(context)) {
      // If the request is invalid, throw a Forbidden exception.
      this.throwForbiddenException();
    }

    // Proceed with the request no matter what.
    return handler.handle();
  }
}
