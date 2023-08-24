import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UseInterceptors,
} from '@nestjs/common';

// dtos
import { CreateUserDTO, AccountResponseDTO } from '../dtos';

// entities
import { Account } from '../entities';

// decorators
import { CurrentUser } from '../decorators/current-user.decorator';

// services
import { AuthService } from '../services';

// interceptors
import { CurrentUserInterceptor, TransformInterceptor } from '../interceptors/';
import { Serialize } from 'src/interceptors/serialize.interceptor';

// util
import { serializeToDto } from 'src/lib';

@Controller('auth')
@Serialize(AccountResponseDTO)
@UseInterceptors(TransformInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('whoami')
  @UseInterceptors(CurrentUserInterceptor)
  async whoAmI(@CurrentUser() user: Account) {
    return serializeToDto(user, AccountResponseDTO);
  }

  @Post('signup')
  async signUp(
    @Body() userDto: CreateUserDTO,
    @Session() session: Record<string, any>,
  ): Promise<AccountResponseDTO> {
    const user = await this.authService.signUp(userDto);
    session.userId = user?.id;

    // serialize the response
    return serializeToDto(user, AccountResponseDTO);
  }

  @Post('signin')
  async signIn(
    @Body() userDto: CreateUserDTO,
    @Session() session: Record<string, any>,
  ): Promise<AccountResponseDTO> {
    const user = await this.authService.signIn(userDto);
    session.userId = user?.id;

    // serialize the response
    return serializeToDto(user, AccountResponseDTO);
  }

  @Post('signout')
  signout(@Session() session: Record<string, any>) {
    session.userId = null;
  }

  @Post('refresh-token')
  refreshToken(@Session() session: Record<string, any>) {
    session.userId = 'refreshed token, lol. joking';
    return 'Refresh token';
  }
}
