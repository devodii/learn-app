import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GoalCategory } from './goal-category.entity';

/**
 * We want a fledged system where you should only create goals based on existing category
 * No need to create foreign key to account, as the category already does that for us.
 */
@Entity()
export class Goal {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { nullable: true })
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('date', { nullable: true })
  targetDate: Date;

  @Column('text', { nullable: true })
  comments: string[];

  @ManyToOne(() => GoalCategory, (category) => category.goal)
  category: GoalCategory;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updatedAt: Date;
}

/**
 * All we need for this table. (from database design)
 * title varchar
	description text
	targetDate date
	categoryID integer > StudyGoalCategory.ID
	AccountID uuid > Accounts.ID
	pricingID integer > Pricing.ID
	buddyID integer > Buddies.ID
 */
