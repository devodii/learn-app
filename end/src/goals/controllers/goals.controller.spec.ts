import { Test, TestingModule } from '@nestjs/testing';
import { GoalController } from './goals.controller';

describe('GoalsController', () => {
  let controller: GoalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoalController],
    }).compile();

    controller = module.get<GoalController>(GoalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
