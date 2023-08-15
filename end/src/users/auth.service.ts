import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public readonly checker = 'AuthService Checker';
}
