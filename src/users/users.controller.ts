import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const customer = await this.usersService.createUser(createUserDTO);

    return res.status(HttpStatus.OK).json({
      message: 'User created',
      id: customer.email,
    });
  }
}
