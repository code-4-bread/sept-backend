import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  display_name: String,
  email: String,
  password: String,
  type: String,
  about: String,
  created_at: { type: Date, default: Date.now }
})
