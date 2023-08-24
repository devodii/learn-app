import { Module } from '@nestjs/common';
import { GoalService } from './services/goals.service';
import { GoalController } from './controllers/goals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goal } from './entities/goal.entity';
import { GoalCategory } from './entities';
import { GoalCategoryController } from './controllers/goal-category.controller';
import { GoalCategoryService } from './services/goal-category.service';
import { UsersModule } from 'src/users/users.module';
import { Account } from 'src/users/entities';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([Goal, GoalCategory, Account]),
  ],
  providers: [GoalService, GoalCategoryService],
  controllers: [GoalController, GoalCategoryController],
})
export class GoalsModule {}
