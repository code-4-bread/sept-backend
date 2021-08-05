export interface Course extends Document {
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly created_by: string;
  readonly created_at: Date;
}
