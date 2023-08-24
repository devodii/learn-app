import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Account } from './account.entity';
import { BaseEntity } from './base.entity';
import { STATUS } from '../enums';

@Entity({ name: 'friendship' })
export class Friendship extends BaseEntity {
  @Column({ type: 'enum', enum: STATUS, default: STATUS.IDLE, nullable: true })
  status?: STATUS;

  @Column({ type: 'varchar', nullable: true })
  // TODO: Prepare list of accepted location and correct the type {string}
  location?: string;

  @OneToOne(() => Account)
  @JoinColumn({ name: 'sender-id' })
  senderId: Account['id'];

  @OneToOne(() => Account)
  @JoinColumn({ name: 'receiver-id' })
  receiverId: Account['id'];
}
