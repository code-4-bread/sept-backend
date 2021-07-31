import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './create-user.dto';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { password } = createUserDTO;

    const saltRounds = 5;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await this.userModel.create({
      ...createUserDTO,
      password: hashedPassword,
    });

    return newUser.save();
  }

  async findByEmail(email: string): Promise<any> {
    const users = await this.userModel.find({ email });

    return users[0] || [];
  }
}
