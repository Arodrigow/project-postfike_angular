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
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
      bookmark_count: 300000,
      tags: ['post', 'mock', 'tag', 'outra', 'pra', 'testar'],
      deadline: '3',
    },
    {
      title: 'Mock 2',
      description: 'This is a mock description 2',
      bookmark_count: 1,
      tags: [],
      deadline: '30',
    },
    {
      title: 'Mock',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
      bookmark_count: 300000,
      tags: ['post', 'mock', 'tag', 'outra', 'pra', 'testar'],
      deadline: '3',
    },
    {
      title: 'Mock',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
      bookmark_count: 300000,
      tags: ['post', 'mock', 'tag', 'outra', 'pra', 'testar'],
      deadline: '3',
    },
    {
      title: 'Mock',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
      bookmark_count: 300000,
      tags: ['post', 'mock', 'tag', 'outra', 'pra', 'testar'],
      deadline: '3',
    },
    {
      title: 'Mock',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
      bookmark_count: 300000,
      tags: ['post', 'mock', 'tag', 'outra', 'pra', 'testar'],
      deadline: '3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
