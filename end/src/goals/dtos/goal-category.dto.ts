import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { AccountResponseDTO } from 'src/users/dtos';

export class GoalCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class GetAllGoalCategoryDTO {
  @Expose()
  id: number;

  @Exclude()
  createdAt: Date;

  @Expose()
  name: string;

  static readonly transformName = 'globalGoalCategory';
}

export class GoalCategoryResponseDTO {
  @Expose({ name: 'cat_id' })
  id: number;

  @Expose({ name: 'cat_name' })
  name: string;

  @Expose({ name: 'cat_createdAt' })
  createdAt: Date;

  @Exclude()
  account: AccountResponseDTO;

  static readonly transformName = 'useGoalCategory';
}
