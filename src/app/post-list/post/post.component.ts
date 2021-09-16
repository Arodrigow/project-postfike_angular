import { FullPostComponent } from './full-post/full-post.component';
import { PostColors } from './../../../models/postColors';
import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from 'src/models/post.dto';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    const rand = Math.floor(Math.random() * this.bgColors.length)
    this.deg = `rotate(${(Math.random() * 3) - 1.5}deg)`;

    this.bgColor = this.bgColors[rand];
  }

  getDeadline() {
    return new Date((Date.now() - new Date(this.postElement.created_at).valueOf())).getDay();
  }

  openModal() {
    const dialogRef = this.dialog.open(FullPostComponent, {
      data: { post: this.postElement }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
