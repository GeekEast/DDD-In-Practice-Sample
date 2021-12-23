import { JsonController, Param, Get } from 'routing-controllers';
import { Service } from 'typedi';

@JsonController('/users')
@Service()
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
