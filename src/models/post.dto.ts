import { UserDto } from './user.dto';
import { TagDto } from './tag.dto';
export interface PostDto {
  id: string;
  title: string;
  description: string;
  details?: string;
  created_at: Date;
  updated_at: Date;
  expiration: Date;
  count_bookmark: number;

  tags?: TagDto[];
  user: UserDto;
}
