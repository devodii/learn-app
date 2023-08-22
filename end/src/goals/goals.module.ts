import { Module } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalsController } from './goals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goal } from './entities/goal.entity';
import { GoalCategory } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Goal, GoalCategory])],
  providers: [GoalsService],
  controllers: [GoalsController],
})
export class GoalsModule {}
