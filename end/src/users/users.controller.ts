import { Controller, Get, Inject, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class UsersController {
  constructor(@Inject('User-Auth') private authService: AuthService) {}

  @Get()
  getUser(): string {
    console.log(this.authService);
    return this.authService.checker;
  }

  @Post('/signup')
  signup(@Session() session: Record<string, any>) {
    session.userId = 3;
    return session.userId;
  }
}

export default (props: any) => {
  console.log(props);
};
