import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return [1, 2, 3, 4];
  }
}
