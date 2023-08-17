import { Controller, Inject, Post, Session } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('user')
export class UsersController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Session() session: Record<string, any>) {
    session.userId = 3;
    return session.userId;
  }
}

export default (props: any) => {
  console.log(props);
};
