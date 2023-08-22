import { Account } from 'src/users/entities';
import { Goal } from './goal.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class GoalCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @CreateDateColumn({ type: 'date', nullable: false })
  createdAt: Date;

  @OneToMany(() => Goal, (goal) => goal.category)
  goal: Goal[];

  @ManyToOne(() => Account, (account) => account.goalCategories) // Use the correct property name
  account: Account;
}
