import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentGoalCategory = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const { currentGoalCategory } = ctx.switchToHttp().getRequest();
    return data ? currentGoalCategory?.[data] : currentGoalCategory;
  },
);
// ReturnType = typeof GoalCategory.
