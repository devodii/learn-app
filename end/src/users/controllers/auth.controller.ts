import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from '../services';
import { UserDto } from '../dtos/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() userDto: UserDto,
    @Session() session: Record<string, any>,
  ) {
    const user = await this.authService.signUp(userDto);
    session.userId = user?.id;
    return user;
  }

  @Post('signin')
  async signIn(
    @Body() userDto: UserDto,
    @Session() session: Record<string, any>,
  ) {
    const user = await this.authService.signIn(userDto);
    session.userId = user?.id;
    return user;
  }

  @Post('signout')
  signout(@Session() session: Record<string, any>) {
    session.userId = null;
  }
}
