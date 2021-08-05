import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './course.interface';
import { CreateCourseDTO } from './create-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) {}

  async createCourse(createCourseDTO: CreateCourseDTO): Promise<Course> {
    const course = await this.courseModel.create({ ...createCourseDTO });

    return course.save();
  }

  async findCourses(): Promise<Course[]> {
    return this.courseModel.find();
  }

  async findCourseByUserId(userId): Promise<Course[]> {
    return this.courseModel.find({created_by: userId});
  }
}
