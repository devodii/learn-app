import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CurrentUserInterceptor } from '../interceptors/current-user.interceptor';

/**
 * Decorator to retrieve the current user from the request object.
 *
 * @param data - Additional data (if applicable).
 * @param context - The execution context containing the request object.
 * @returns The current user associated with the request.
 */

export const CurrentUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    /**
     * Retrieve the current user from the request's currentUser property.
     * @see {@link CurrentUserInterceptor.checkRequest} - Interceptor where the `currentUser` property is set.
     */
    const currentUser = request.currentUser;
    return data ? currentUser?.[data] : currentUser;
  },
);

export {};

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
