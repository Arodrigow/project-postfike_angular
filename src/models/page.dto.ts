import { PostDto } from './post.dto';
export interface PageDto {
  page: PostDto[];
  count: number;
}
