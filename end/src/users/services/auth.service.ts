import {
  BadRequestException,
  Get,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { hashPassword, compareHashedPasswords } from 'src/utils/password.util';

interface Credentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  @Get('whoami')
  public async whoami() {
    return 'whoami';
  }

  public async signUp(params: Credentials) {
    const { email, password } = params;
    await this.findDuplicateEmail(email);
    const hash = await hashPassword(password);
    const user = await this.userService.create(email, hash);
    return user;
  }

  public async signIn(params: Credentials) {
    const { email, password } = params;
    const [user] = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Email not found');
    }
    await this.verifyPassword(password, user.password);
    return user;
  }

  public async signOut() {
    return 'signout';
  }

  public async refreshToken() {
    return 'refreshToken';
  }

  ///////////////////////////////////////////////////////////////////////

  private async findDuplicateEmail(email: string) {
    if (!email) {
      throw new NotFoundException(`Email: ${email} not found!`);
    }
    const user = await this.userService.findByEmail(email);
    if (user.length > 0) {
      throw new BadRequestException('This Email is in use');
    }
  }

  private async verifyPassword(plainPassword: string, hashedPassword: string) {
    const passwordIsMatch = await compareHashedPasswords(
      plainPassword,
      hashedPassword,
    );

    if (!passwordIsMatch) {
      throw new UnauthorizedException('Invalid password');
    }
  }
}
