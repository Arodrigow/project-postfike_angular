import { API_CONFIG } from './../../config/api.config';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { PostDto } from 'src/models/post.dto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  breakpoint = 3;
  posts: PostDto[] = []
  postCount: number = 0;
  pageNumber: number = 1;

  constructor(private postService: PostService, private localtion: Location) {}

  ngOnInit(): void {
    this.getAllPosts()
    this.pageNumber = 1;

    this.breakpoint = (window.visualViewport.width <= 400) ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.visualViewport.width <= 400) ? 1 : 3;
  }

  getAllPosts() {
    this.postService.getAllPosts(this.pageNumber).subscribe(
      response => {
        this.posts = response.page
        this.postCount = response.count;
      },
      error => {});
  }

  handlePageChange(event: any) {
    this.pageNumber = event;
    this.getAllPosts();
    this.localtion.go(`/posts?page=${this.pageNumber}`)
  }


}
