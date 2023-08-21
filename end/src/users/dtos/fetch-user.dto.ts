import { Exclude, Expose } from 'class-transformer';

// serialize any user request (only expose the id and username.)
export class FetchUserDTO {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Exclude()
  password: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  email: string;

  @Exclude()
  deletedAt: Date;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
