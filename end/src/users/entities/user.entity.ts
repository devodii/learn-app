import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile.entity';
import { BaseEntity } from './base.entity';

@Entity({ name: 'users' })
/**
 * The User entity represents a registered user in the application
 */
export class User extends BaseEntity {
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

  /**
   * The timestamp when the user entity was deleted (if applicable)
   */
  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date | null;
}
