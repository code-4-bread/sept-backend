import { Injectable } from '@nestjs/common';
import { CreateCoursesToUser } from './create-courses-to-user.dto';
import { CoursesToUser } from './courses-to-user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CoursesToUserService {
  constructor(@InjectModel('CoursesToUser') private readonly coursesToUserModel: Model<CoursesToUser>) {}

  async create(createCoursesToUser: CreateCoursesToUser): Promise<CoursesToUser> {
    const course = await this.coursesToUserModel.create({ ...createCoursesToUser });

    return course.save();
  }

  async findByUserId(userId): Promise<any> {
    const courses = await this.coursesToUserModel.find({ user_id: userId });

    return courses;
  }
}
