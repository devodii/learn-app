import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from 'src/users/guards/auth.guard';

export const Auth = (...roles: any[]) => {
  return applyDecorators(UseGuards(AuthGuard));
};
