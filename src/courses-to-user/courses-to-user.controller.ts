import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CoursesToUserService } from './courses-to-user.service';
import { CreateCoursesToUser } from './create-courses-to-user.dto';

@Controller('courses-to-user')
export class CoursesToUserController {
  constructor(private coursesToUserService:CoursesToUserService) {
  }

  @Post('/create')
  async createCoursesToUser(@Res() res, @Body() createCoursesToUser: CreateCoursesToUser) {
    const coursesToUser = await this.coursesToUserService.create(createCoursesToUser);

    return res.status(HttpStatus.OK).json({
      message: 'Courses to user created',
      id: coursesToUser.id,
    });
  }

  @Post('/findByUserId')
  async findByUserId(@Res() res, @Body() { user_id: userId }: any) {
    const courses = await this.coursesToUserService.findByUserId(userId);

    return res.status(HttpStatus.OK).json({ courses });
  }
}
