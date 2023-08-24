import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoalCategory } from '../entities';
import { Repository } from 'typeorm';
import { Account } from 'src/users/entities';

@Injectable()
export class GoalCategoryService {
  constructor(
    @InjectRepository(GoalCategory) private repo: Repository<GoalCategory>,
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {}

  public async create(createGoalCategoryDto: string, userId: number) {
    const category = this.repo.create({
      name: createGoalCategoryDto,
      account: { id: userId },
    });

    const savedCategory = await this.repo.save(category);
    const {
      name: cat_name,
      account: { id: account_id },
      id: cat_id,
    } = savedCategory;
    return { account_id, cat_id, cat_name };
  }

  public async findAll(accountId: number) {
    const goal = await this.accountRepo.findOneOrFail({
      where: { id: accountId },
      relations: ['goalCategory'],
    });

    const { id: account_id, username } = goal;
    // extract id and name from each category
    const goal_categories = goal.goalCategory.map(({ id, name }) => ({
      id,
      name,
    }));
    return { account_id, username, goal_categories };
  }

  public async findOneWithAuth(id: number, userId: number) {
    const category = await this.repo.findOneOrFail({
      where: { id, account: { id: userId } },
      relations: ['goal', 'account'],
    });

    const { goal, createdAt, name, id: cat_id } = category;
    return { goal, createdAt, id: cat_id, name };
  }

  // used by current-category intercptor.
  public findOneWithoutAuth(id: number) {
    return this.repo.findOne({
      where: { id },
    });
  }

  public async update(
    id: number,
    attrs: Partial<GoalCategory>,
    userId: number,
  ) {
    const category = await this.repo.findOne({
      where: { id, account: { id: userId } },
    });
    if (!category) {
      throw new NotFoundException(`${category} not found`);
    }
    Object.assign(category, attrs);
    const {
      name,
      account: { id: account_id },
      id: category_id,
    } = category;
    return this.repo.save({
      name,
      account: { id: account_id },
      id: category_id,
    });
  }

  public async delete(id: number, userId: number) {
    const category = await this.repo.findOneBy({ id, account: { id: userId } });
    if (!category) {
      throw new NotFoundException(`${category} not found`);
    }
    return this.repo.remove(category);
  }
}
