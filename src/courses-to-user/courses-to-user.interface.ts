export interface CoursesToUser extends Document {
  readonly id: string;
  readonly course_id: string;
  readonly user_id: string;
}
