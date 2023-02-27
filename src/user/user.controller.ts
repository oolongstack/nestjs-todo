import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from '../enum/config.enum';
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}
  @Get('list')
  getList() {
    // console.log(this.userService);
    console.log(this.configService.get(ConfigEnum.DB_DATABASE));

    // return [{ name: 'cjl' }, { name: 'mf' }];
    return this.userService.getUsers();
  }
}
