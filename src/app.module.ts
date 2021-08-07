import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { CoursesToUserModule } from './courses-to-user/courses-to-user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest', { useNewUrlParser: true }), UsersModule, AuthModule, CourseModule, CoursesToUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
