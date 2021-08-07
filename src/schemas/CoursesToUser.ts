import * as mongoose from 'mongoose';

export const CoursesToUserSchema = new mongoose.Schema({
  course_id: String,
  user_id: String,
})
