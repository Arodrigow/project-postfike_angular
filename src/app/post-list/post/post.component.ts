import { PostColors } from './../../../models/postColors';
import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from 'src/models/post.dto';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postElement!: PostDto;
  bgColors = PostColors.getColors();
  bgColor = this.bgColors[0];
  deg = 'rotate(-1.3deg)';

  constructor() {}

  ngOnInit(): void {
    const rand = Math.floor(Math.random() * 5)
    this.deg = `rotate(${(Math.random() * 3) - 1.5}deg)`

    this.bgColor = this.bgColors[rand];
  }
}
