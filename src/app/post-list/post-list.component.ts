import { Component, OnInit } from '@angular/core';
import { PostDto } from 'src/models/post.dto';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: PostDto[] = [
    {
      title: 'Mock',
      description: 'This is a mock description',
      bookmark_count: 300000,
      tags: ['post', 'mock', 'tag'],
      deadline: '3',
    },
    {
      title: 'Mock 2',
      description: 'This is a mock description 2',
      bookmark_count: 1,
      tags: [],
      deadline: '30',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
