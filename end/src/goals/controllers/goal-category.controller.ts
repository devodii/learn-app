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
} from '@nestjs/common';
import { Auth } from 'src/guards';
import { GetAllGoalCategoryDTO, GoalCategoryDto } from '../dtos';
import { GoalCategoryService } from '../services/goal-category.service';
import { TransformResponse } from 'src/interceptors';

@Auth()
@Controller('goal-categories')
export class GoalCategoryController {
  constructor(private goalCategoryService: GoalCategoryService) {}
  @Post()
  createGoalCategory(
    @Body() createGoalCategoryDto: GoalCategoryDto,
    @Session() session: Record<string, any>,
  ) {
    const { name } = createGoalCategoryDto;

    // receive currentUser's id from session
    const { userId } = session;

    /**
     * should only pass if there's an authenticated user. else, it throws an error.
     */
    return this.goalCategoryService.create(name, userId);
  }

  /**
   *TODO: Set roles for internal team members of this app
   * This should return all the categories in my database
   */
  // @Get()
  // @TransformResponse(GetAllGoalCategoryDTO)
  // getAllGoalCategories() {
  //   return this.goalCategoryService.findAll();
  // }

  @Get()
  @TransformResponse('user')
  async getAllGoalCategory(
    @Session() session: Record<string, any>,
  ): Promise<any> {
    return await this.goalCategoryService.findAll(session.userId);
  }

  @Get(':id')
  async findOneGoalCategory(
    @Param('id', ParseIntPipe) id: number,
    @Session() session: Record<string, any>,
  ) {
    const { userId } = session;
    return await this.goalCategoryService.findOneWithAuth(id, userId);
  }

  @Put(':id')
  updateGoalCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGoalCategoryDto: Partial<GoalCategoryDto>,
    @Session() session: Record<string, any>,
  ) {
    const { userId } = session;
    return this.goalCategoryService.update(id, updateGoalCategoryDto, userId);
  }

  @Delete(':id')
  deleteGoalCategory(
    @Param('id', ParseIntPipe) id: number,
    @Session() session: Record<string, any>,
  ): any {
    /**
     * Why session here?
     * I wouldn't want a user to delete another's goal category. This could be mistakenly because there might be a leak somewhere.
     *
     */
    const { userId } = session;
    return this.goalCategoryService.delete(id, userId);
  }
}
