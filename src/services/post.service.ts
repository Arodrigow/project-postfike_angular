import { PostDto } from './../models/post.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient,) {}

  getAllPosts(page: number) {
    return this.http.get<PostDto[]>(`http://localhost:3000/posts?page=${page}`);
  }
}
