import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friendship, Profile, Account } from './entities';
import { AccountService, ProfileService, AuthService } from './services';
import {
  ProfileController,
  AccountController,
  AuthController,
} from './controllers';
import { TransformInterceptor } from './interceptors/transformer.interceptor';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Account, Profile, Friendship])],
  providers: [
    AccountService,
    ProfileService,
    AuthService,
    { provide: 'Transformer', useClass: TransformInterceptor },
  ],
  controllers: [AuthController, AccountController, ProfileController],
  exports: [AccountService],
})
export class UsersModule {}
