import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.usersService.createUser(createUserDTO);

    return res.status(HttpStatus.OK).json({
      message: 'User created',
      id: user.email,
    });
  }

  @Post('/update')
  async updateUser(@Res() res, @Body() updateUserDTO: UpdateUserDTO) {
    const user = await this.usersService.updateUser(updateUserDTO);

    return res.status(HttpStatus.OK).json({
      message: 'User updated',
      user,
    });
  }
}
