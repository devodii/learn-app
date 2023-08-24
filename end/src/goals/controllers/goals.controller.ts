/**
 * @see GoalCategoryController
 *  ? NOTE: This is an extension of goals-category, I'm only seperating it.
 *   Route to find a one goalCategory: `goals-categories/find/:id`. We can append `goals` and continue from there.
 */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Session,
  UseInterceptors,
  applyDecorators,
} from '@nestjs/common';
import { Auth } from 'src/guards';
import { GoalService } from '../services/goals.service';
import { CreateGoalDTO } from '../dtos/create-goal.dto';
import { CurrentGoalCategory } from '../decorators/category.decorator';
import { CategoryInterceptor } from '../interceptors/category.interceptor';
import { TransformResponse } from 'src/interceptors';

const Creator = () => {
  return applyDecorators(
    UseInterceptors(CategoryInterceptor),
    TransformResponse(CreateGoalDTO),
  );
};

@Auth()
@Controller('goal-categories/goals')
export class GoalController {
  constructor(private goalService: GoalService) {}

  @Post()
  @Creator()
  async createGoal(
    @CurrentGoalCategory('id') categoryId: number,
    @Body() createGoalDto: CreateGoalDTO,
  ) {
    const goal = await this.goalService.create(createGoalDto);
    console.log(categoryId);
    return await this.goalService.updateCategoryWithGoal(goal.id, categoryId);
  }

  @Get()
  getAllGoal(@Session() session: Record<string, any>) {
    const { userId } = session;
    return this.goalService.findAll(userId);
  }

  @Get('/:goalId')
  findOneGoal(
    @Param('goalId', ParseIntPipe) goalId: number,
    @Session() session: Record<string, any>,
  ) {
    const accountId = session.userId;
    return this.goalService.findOne(goalId, accountId);
  }

  @Put('/:goalId')
  async updateGoal(
    @Param('goalId', ParseIntPipe) goalId: number,
    @Session() session: Record<string, any>,
    @Body() updateGoalDto: any,
  ) {
    const { userId } = session;
    return await this.goalService.update(goalId, updateGoalDto, userId);
  }

  @Get('by-cat/:categoryId')
  getGoalsByCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Session() session: Record<string, any>,
  ) {
    const { userId } = session;
    return this.goalService.findByCategory(categoryId, userId);
  }

  @Delete('/:goalId')
  deleteGoal(
    @Param('goalId', ParseIntPipe) goalId: number,
    @Session() session: Record<string, any>,
  ) {
    const { userId } = session;
    return this.goalService.delete(goalId, userId);
  }

  /**
   *
   *
   * I'd be back to implement comments feature in a bit
   */

  // @Post('/:id/comments')
  // createGoalComment(
  //   @Param('id', ParseIntPipe) goalId: number,
  //   @Body() createCommentDto: any,
  // ) {
  //   return `Create comments on goal`;
  // }

  // @Get('/:id/comments')
  // getGoalComments(goalId: number) {
  //   return `Get comments created on goals`;
  // }

  // @Put('/:id/comments/:commentId')
  // updateGoalComment(
  //   @Param('id', ParseIntPipe)
  //   id: number,
  //   @Param('commentId', ParseIntPipe)
  //   commentId: number,
  //   @Body() updateCommentDto: any,
  // ) {
  //   return `Update comments made on goal`;
  // }
  // @Delete('/:id/comments/:commentId')
  // deleteGoalComment(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Param('commentId', ParseIntPipe) commentId: number,
  // ) {
  //   return `Delete comment on goal`;
  // }
}
