import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGoalDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description?: string;

  @IsNumber()
  categoryId: number;

  static readonly transformName = 'createGgoal';
}
