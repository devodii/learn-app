import { Account } from 'src/users/entities';
import { Goal } from './goal.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class GoalCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updatedAt: Date;

  @OneToMany(() => Goal, (goal) => goal.category)
  goal: Goal[];

  @ManyToOne(() => Account, (account) => account.goalCategory) // Use the correct property name
  account: Account;
}
