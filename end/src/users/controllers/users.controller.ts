import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { UsersService } from '../services';
import { User } from '../entities';

const Auth = () => {
  return UseGuards(AuthGuard);
};

@Controller('user')
@Auth()
export class UsersController {
  constructor(private userService: UsersService) {}
  private logger = new Logger(UsersController.name);

  @Get()
  // NOTE: This should only be accessible by an adminstrator of this application
  // TODO: Add a guard role named `Admin`
  findAllUsers() {
    const users = this.userService.findAll();
    return users;
  }

  @Get('/:username')
  // TODO: Create a DTO for username
  async findUser(@Param('username') username: string) {
    const user = await this.userService.findOne('username', username);
    this.logger.log(user);
    return user;
  }

  @Get('/:username/profile')
  // TODO: Create a DTO for username
  async findUserWithProfile(@Param('username') username: string) {
    const user = await this.userService.findUserProfile(username);
    this.logger.log(user);
    return user;
  }

  // TODO: Create an update-user DTO.
  @Patch('/:username')
  updateUser(@Param('username') username: string, @Body() body: Partial<User>) {
    return this.userService.update(username, body);
  }

  @Delete('/:username')
  async deleteUser(@Param('username') username: string) {
    return this.userService.delete(username);
  }

  // ----------------------------------------------------------------------------------------------------------------
  // BUDDY SEARCH

  @Get('search/:id') // change to username
  async findBuddy(@Param('id') id: number) {
    const user = await this.userService.findId(id);
    return user;
  }
}

export default (props: any) => {
  console.log(props);
};
