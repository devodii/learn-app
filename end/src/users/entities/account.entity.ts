import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profile } from './profile.entity';
import { BaseEntity } from './base.entity';
import { GoalCategory } from 'src/goals/entities';

@Entity({ name: 'account' })
/**
 * The User entity represents a registered user in the application
 */
export class Account extends BaseEntity {
  /**
   * The unique email address of the user
   */
  @Column({ name: 'email', type: 'varchar', unique: true, nullable: false })
  email: string;

  /**
   * The unique email address of the user
   */
  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;

  /**
   * The unique username of the user
   */
  @Column({ unique: true, type: 'varchar', nullable: true })
  username: string;

  /**
   * The profile associated with the user
   */
  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  // allow users to create goal category
  @OneToMany(() => GoalCategory, (goalCategory) => goalCategory.account)
  goalCategory: GoalCategory[];

  /**
   * The timestamp when the user entity was deleted (if applicable)
   */
  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date | null;
}
