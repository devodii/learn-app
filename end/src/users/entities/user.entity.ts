import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  customizePrimaryKey() {
    this.id = `user_${this.id}`;
  }

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  username: string;

  // ? map primary key on profile to user.
  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  updtedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date | null;
}
