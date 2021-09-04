import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from 'src/models/post.dto';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postElement!: PostDto;

  constructor() {}

  ngOnInit(): void {}
}
