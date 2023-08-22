import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GoalCategory } from './goal-category.entity';
import { Account } from 'src/users/entities';

// We want a fleded system where you should only create goals on category.
@Entity()
export class Goal {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  title: string;

  @ManyToOne(() => GoalCategory, (category) => category.goal)
  category: GoalCategory;
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
