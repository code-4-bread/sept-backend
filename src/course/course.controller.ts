import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDTO } from './create-course.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post('/create')
  async createCourse(@Res() res, @Body() createCourseDTO: CreateCourseDTO) {
    const course = await this.courseService.createCourse(createCourseDTO);

    return res.status(HttpStatus.OK).json({
      message: 'Course created',
      id: course.id,
    });
  }

  @Get('/findAll')
  async findCourses(@Res() res) {
    const courses = await this.courseService.findCourses();

    return res.status(HttpStatus.OK).json({courses});
  }

  @Post('/find')
  async findCourseByUserID(@Res() res, @Body() { id } : any  ) {
    const courses = await this.courseService.findCourseByUserId(id);

    return res.status(HttpStatus.OK).json({courses});
  }

  @Post('/delete')
  async deleteCourse(@Res() res, @Body() { id } : any  ) {
    await this.courseService.deleteCourse(id);

    return res.status(HttpStatus.OK).json({
      message: 'Course deleted',
    });
  }
}
