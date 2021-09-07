import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PostDto } from 'src/models/post.dto';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  breakpoint = 3;
  posts: PostDto[] = []

  constructor(private http: HttpClient,) {}

  ngOnInit(): void {
    this.getAllPosts()
    this.breakpoint = (window.visualViewport.width <= 400) ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.visualViewport.width <= 400) ? 1 : 3;
  }

  getAllPosts() {
    this.http.get<PostDto[]>('http://localhost:3000/posts').subscribe(
      response => {
        this.posts = response;
      },
      error => {});
  }
}
