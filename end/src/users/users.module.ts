import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friendship, Profile, User } from './entities';

/** Add Authservice as custom provider */
@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Friendship])],
  providers: [UsersService, { provide: 'User-Auth', useClass: AuthService }],
  controllers: [UsersController],
})
export class UsersModule {}
