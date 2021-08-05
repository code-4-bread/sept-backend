export interface User extends Document {
  readonly id: string;
  readonly display_name: string;
  readonly email: string;
  readonly password: string;
  readonly type: string;
  readonly about: string;
  readonly created_at: Date;
}
