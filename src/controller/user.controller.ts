import { injectable } from 'inversify';
import { JsonController, Param, Get } from 'routing-controllers';

@JsonController('/users')
@injectable()
export class UserController {
  @Get('/')
  getAll() {
    return [{ name: 'user1' }, { name: 'user2' }];
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return { name: `user${id}` };
  }
}
