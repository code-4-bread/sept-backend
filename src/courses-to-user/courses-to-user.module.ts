import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesToUserSchema } from '../schemas/CoursesToUser';
import { CoursesToUserController } from './courses-to-user.controller';
import { CoursesToUserService } from './courses-to-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CoursesToUser', schema: CoursesToUserSchema }])
  ],
  controllers: [CoursesToUserController],
  providers: [CoursesToUserService]
})
export class CoursesToUserModule {}
