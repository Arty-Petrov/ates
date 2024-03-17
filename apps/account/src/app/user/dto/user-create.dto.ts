import { OmitType } from '@nestjs/mapped-types';
import { UserDto } from './user.dto';

export class UserCreateDto extends OmitType(UserDto, ['id', 'publicId']) {}
