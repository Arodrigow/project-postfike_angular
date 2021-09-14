import { PageDto } from './../models/page.dto';
import { API_CONFIG } from './../config/api.config';
import { PostDto } from './../models/post.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient,) {}

  getAllPosts(page: number) {
    return this.http.get<PageDto>(`${API_CONFIG.baseUrl}/posts?page=${page}`);
  }
}
