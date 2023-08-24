import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Observable, map } from 'rxjs';

interface ClassConstructor {
  new (...args: any[]): object;
  readonly transformName?: string;
}

/**
 * Transform by a static (transformName) stored in the DTO class OR string being passed as parameter.
 * @usage
 * ts``
 *  @Transform(UserDto)
 *  OR
 *  @Transform('user')
 * ```
 *
 * @param {ClassConstructor | string} dto
 */
export const TransformResponse = (dto: ClassConstructor | string) => {
  return UseInterceptors(new TransformResponseInterceptor(dto));
};

class TransformResponseInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor | string) {}
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // TODO: find what needs to use execution's context and adjust

    // check if type of DTO is String Or ClassConstructor
    const dtoName =
      typeof this.dto === 'string' ? this.dto : this.dto?.transformName;

    return handler.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map((item) => ({ [dtoName]: item }));
        }
        return { [dtoName]: instanceToPlain(data) };
      }),
    );
  }
}
