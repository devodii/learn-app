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

/**
 * Base serializer for any controller.
 * @usage `@Serialize(AnyDto)`
 */
export const Serialize = (dto: ClassConstructor) => {
  return UseInterceptors(new SerializeInterceptor(dto));
};

class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> {
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
