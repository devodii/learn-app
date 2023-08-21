import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
/**
 * UserService:: A root service with methods directed the user's repository.
 */
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  public create(email: string, password: string): Promise<User> {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  public async findAll() {
    return await this.repo.find();
  }

  // Find by Email
  public async find(email: string) {
    return await this.repo.find({ where: { email } });
  }

  public async findId(id: number) {
    return await this.repo.find({ where: { id } });
  }

  // Find by field.
  public async findOne(field: keyof User, value: string | number | User) {
    const whereCondition = { [field]: value };
    return await this.repo.findOne({ where: whereCondition });
  }

  public async delete(username: string) {
    const user = await this.repo.findOne({ where: { username } });
    if (!user) {
      throw new Error('user not found');
    }
    return await this.repo.remove(user);
  }

  public async update(username: string, attrs: Partial<User>) {
    const user = await this.findOne('username', username);
    if (!user) {
      throw new Error(`username: ${username} not found`);
    }
    Object.assign(user, attrs); // Merges the new values without deleting existing ones.
    return await this.repo.save(user);
  }

  public async findUserProfile(username: string) {
    const [user] = await this.repo.find({
      where: { username },
      relations: ['profile'],
    });

    return user;
  }

  // Connect all views ✨.
  public async getUserWithProfileAndFriendships() {
    const [user] = await this.repo.find({
      // where: { id },
      relations: ['profile'],
    });
    return user;
  }
}
