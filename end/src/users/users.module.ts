import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friendship, Profile, User } from './entities';
import { UsersService, ProfileService, AuthService } from './services';
import {
  ProfileController,
  UsersController,
  AuthController,
} from './controllers';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Friendship])],
  providers: [
    UsersService,
    ProfileService,
    AuthService,
    { provide: 'Auth', useExisting: AuthService },
  ],
  controllers: [AuthController, UsersController, ProfileController],
})
export class UsersModule {}
