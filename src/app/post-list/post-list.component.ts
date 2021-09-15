import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { PostDto } from 'src/models/post.dto';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private postService: PostService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => this.pageNumber = params.page);
    this.getAllPosts()

    this.breakpoint = (window.visualViewport.width <= 400) ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.visualViewport.width <= 400) ? 1 : 3;
  }

  getAllPosts() {
    this.postService.getAllPosts(this.pageNumber).subscribe(
      response => {
        if (response.page.length == 0) {
          this.router.navigateByUrl('/Page-Not-Found')
        }
        this.posts = response.page
        this.postCount = response.count;
      },
      error => {});
  }

  handlePageChange(event: any) {
    this.pageNumber = event;
    this.getAllPosts();
    this.location.go(`/posts?page=${this.pageNumber}`)
  }


}
