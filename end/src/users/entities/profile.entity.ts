import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'profile' })
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @BeforeInsert()
  customizePrimaryKey() {
    this.id = `profile_${this.id}`;
  }

  @Column({ type: 'text', nullable: true })
  bio?: string;

  //   @Column({ type: 'string', nullable: true })
  //   // TODO: Prepare list of accepted location and correct the type {string}
  //   location?: any;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  updtedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date | null;
}
