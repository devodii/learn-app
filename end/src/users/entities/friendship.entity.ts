import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum STATUS {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  ACCCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
}

@Entity({ name: 'friendship' })
export class Friendship {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  customizePrimaryKey() {
    this.id = `friendship_${this.id}`;
  }

  @Column({ type: 'enum', enum: STATUS, default: STATUS.IDLE, nullable: true })
  status?: STATUS;

  //   @Column({ type: 'string', nullable: true })
  //   // TODO: Prepare list of accepted location and correct the type {string}
  //   location?: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'sender_id' })
  senderId: User['id'];

  @OneToOne(() => User)
  @JoinColumn({ name: 'receiver' })
  receiverId: User['id'];

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  updtedAt: Date;
}
