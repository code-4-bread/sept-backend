import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);

    const isValidated = await bcrypt.compare(password, user.password);

    return isValidated ? user : null;
  }

  async login(loginDTO: LoginDTO) {
    const user = await this.validateUser(loginDTO.email, loginDTO.password);
    let payload;
    if (user !== null) {
      payload = { email: user.email, id: user.id };

      return {
        user,
        access_token: this.jwtService.sign(payload),
      };
    }

    return null;
  }
}
