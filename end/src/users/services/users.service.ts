import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
/**
 * UserService:: A root service with methods directed the user's repository.
 */
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  /**
   * @param  {string} email   - The user's email
   * @param {string} password - The user's password
   * @returns {Promise<User>} - A promise with the newly created user.
   */
  public create(email: string, password: string): Promise<User> {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  /**
   *
   * @param {string} email    - The user's email
   * @returns {Promise<User>} - A promise with the user(s) object that has the email found.
   */
  public async findByEmail(email: string): Promise<User[]> {
    if (!email) {
      throw new NotFoundException('No email provided');
    }
    return await this.repo.find({ where: { email } });
  }

  /**
   *
   * @param {number} id    - The user's id
   * @returns {Promise<User>} - A promise with the user object that has the id found.
   */
  public async findById(id: number): Promise<User> {
    if (!id) {
      throw new NotFoundException('No ID provided');
    }
    const user = await this.repo.findOneBy({ id });
    return user;
  }

  // Connect all views ✨.
  async getUserWithProfileAndFriendships(id: number) {
    const [user] = await this.repo.find({
      where: { id },
      relations: ['profile', 'friendship'],
    });
    return user;
  }
}
