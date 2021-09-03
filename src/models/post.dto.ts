export interface PostDto {
  title: string;
  description: string;
  bookmark_count: number;
  tags?: string[];
  created_at?: Date;
}
