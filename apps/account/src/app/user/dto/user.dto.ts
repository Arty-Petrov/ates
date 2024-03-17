import { Role } from '@app/shared';
import { type User } from '@prisma/account-client';
import { Exclude } from 'class-transformer';
import { IsEmail, IsEnum, IsString, IsUUID } from 'class-validator';
export class UserDto implements User {
  @Exclude()
  id: number;

  @IsUUID()
  publicId: string;

  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsEnum(Role)
  role: Role;
}
