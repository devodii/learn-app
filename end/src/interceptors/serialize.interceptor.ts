import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Observable, map } from 'rxjs';

type ClassConstructor = {
  new (...args: any[]): object;
};

export const Serialize = (dto: ClassConstructor) => {
  return UseInterceptors(new SerializeInterceptor(dto));
};

/**
 * Base serializer for any controller.
 * @alias Serialize
 * @usage `@Serialize(AnyDto)`
 */
class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return handler.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map((item) => instanceToPlain(item));
        }
        return instanceToPlain(data);
      }),
    );
  }
}
