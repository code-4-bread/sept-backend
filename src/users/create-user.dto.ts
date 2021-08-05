export class CreateUserDTO {
  readonly display_name: string;
  readonly email: string;
  readonly password: string;
  readonly type: string;
  readonly about: string;
  readonly created_at: Date;
}
