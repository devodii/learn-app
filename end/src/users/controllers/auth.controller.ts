import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from '../services';
import { UserDto } from '../dtos/create-user.dto';
import { TransformInterceptor } from '../interceptors/transformer.interceptor';
import { CurrentUser } from '../decorators/current-user.decorator';
import { CurrentUserInterceptor } from '../interceptors/current-user.interceptor';
import { User } from '../entities';

@Controller('auth')
@UseInterceptors(new TransformInterceptor())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('whoami')
  @UseInterceptors(CurrentUserInterceptor)
  async whoAmI(@CurrentUser() user: User) {
    return user;
  }

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
