import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Abstract base class for entities, providing common fields and functionality.
 */
export abstract class BaseEntity {
  /**
   * Unique identifier for the entity.
   */
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  /**
   * Timestamp indicating the date and time when the entity was created.
   */
  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt: Date;

  /**
   * Timestamp indicating the date and time when the entity was last updated.
   */
  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updatedAt: Date;
}
