export class CreateUserDTO {
  readonly display_name: string;
  readonly email: string;
  readonly password: string;
  readonly type: string;
  readonly created_at: Date;
}