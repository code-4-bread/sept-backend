import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
  title: String,
  type: String,
  about: String,
  created_by: String,
  created_at: { type: Date, default: Date.now }
})
