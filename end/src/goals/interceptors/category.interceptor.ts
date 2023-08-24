import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { GoalCategoryService } from '../services/goal-category.service';

@Injectable()
export class CategoryInterceptor implements NestInterceptor {
  constructor(private goalCategoryService: GoalCategoryService) {}
  async intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { categoryId } = request.body || {};

    if (!categoryId) {
      throw new NotFoundException(
        `Category ID: ${categoryId} not found from request`,
      );
    }

    if (categoryId) {
      const category = await this.goalCategoryService.findOneWithoutAuth(
        categoryId,
      );
      // modify request if we have a category.
      request.currentGoalCategory = category || 'no category found';
    }

    return handler.handle().pipe(map((goal) => ({ goal })));
  }
}

/**
 * STORY
 * User gets Authnticated
 * User creates a category
 * User creates goals on that category by passing the categoryId in to the request body.
 */
