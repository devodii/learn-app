import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Goal, GoalCategory } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal) private repo: Repository<Goal>,
    @InjectRepository(GoalCategory)
    private catRepo: Repository<GoalCategory>,
  ) {}

  public async create(attrs: Goal | Partial<Goal>) {
    const goal = this.repo.create({ ...attrs });
    const savedGoal = await this.repo.save(goal);

    /**
     * Goal is created in isolation from category
     * How? We are not expecting any catrgory from the request
     * We shall create a seperate method that connects goals to categories
     */
    const {
      id,
      title: goal_title,
      description: goal_description,
      targetDate: goal_target_date,
      comments: goal_comments,
    } = savedGoal;
    return {
      id,
      goal_title,
      goal_description,
      goal_target_date,
      goal_comments,
    };
  }

  public findAll(userId: number) {
    const goals = this.repo.find({
      where: { category: { account: { id: userId } } },
      relations: ['category'],
    });
    return goals;
  }

  /**
   * this returns all goals a user has. (synced by category and by accounts)
   * Mainly synced by account passed from session
   * @param goalId - id of goal you want to check for
   * @param accountId - currently auth user's account id (session.userId)
   * @returns
   */
  public async findOne(goalId: number, accountId: number) {
    const goal = await this.repo.findOneOrFail({
      where: { id: goalId, category: { account: { id: accountId } } },
      relations: ['category'],
    });
    const {
      id,
      title,
      description,
      comments,
      targetDate,
      category: { id: category_id, name: category_name },
    } = goal;
    return {
      id,
      title,
      description,
      comments,
      targetDate,
      category_id,
      category_name,
    };
  }

  public async update(
    goalId: number,
    attrs: Partial<Goal> | Goal,
    accountId: number,
  ) {
    const goal = await this.repo.findOne({
      where: {
        id: goalId,
        category: {
          account: {
            id: accountId,
          },
        },
      },
      relations: ['category'],
    });
    if (!goal) {
      throw new NotFoundException(`Goal with id=${goalId} not found`);
    }
    Object.assign(goal, attrs);
    return this.repo.save(goal);
  }

  public findByCategory(categoryId: number, accountId: number) {
    return this.catRepo.find({
      where: { id: categoryId, account: { id: accountId } },
      relations: ['goal'],
    });
  }

  public async updateCategoryWithGoal(goalId: number, categoryId: number) {
    const goal = await this.repo.findOneOrFail({ where: { id: goalId } });
    const category = await this.catRepo.findOneOrFail({
      where: { id: categoryId },
    });

    goal.category = category;

    const savedAndUpdatedGoal = await this.repo.save(goal);
    // We shall use connected as a prefix to denote that it has already been created by another method.
    const {
      id: connected_goal_id,
      title: connected_goal_title,
      description: connected_goal_description,
      comments: connected_goal_comments,
      category: {
        id: connected_goal_category_id,
        name: connected_goal_category_name,
      },
    } = savedAndUpdatedGoal;
    return {
      connected_goal_id,
      connected_goal_title,
      connected_goal_description,
      connected_goal_comments,
      connected_goal_category_id,
      connected_goal_category_name,
    };
  }

  public async delete(goalId: number, accountId: number) {
    const goal = await this.repo.findOne({
      where: { id: goalId, category: { account: { id: accountId } } },
    });
    if (!goal) {
      throw new NotFoundException(`Goal with id=${goalId} not found`);
    }
    return this.repo.remove(goal);
  }

  /**
   *
   *
   *
   *
   *
   *I'd be back to implement comments feature in a bit
   *
   *
   *
   */
  public createComment(id: number, attrs: string[]) {
    const comment = this.repo.create({ comments: attrs });
    return this.repo.save(comment);
  }

  public findAllComments() {
    return;
  }

  public updateComment() {
    return;
  }

  public deleteComment() {
    return;
  }
}

/**
 * {
  "title": "Mathematics",
  "description": "Lorem ipsum",
  "categoryId": 6
}
 */
