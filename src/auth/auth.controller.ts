import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Res() res, @Body() loginDTO: LoginDTO) {
    const accessToken = await this.authService.login(loginDTO);

    return res.status(HttpStatus.OK).json({ accessToken });
  }
}
