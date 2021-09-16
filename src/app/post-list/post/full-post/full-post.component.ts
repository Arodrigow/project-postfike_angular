import { PostDto } from 'src/models/post.dto';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})

export class FullPostComponent implements OnInit {
  fullPostData: PostDto;
  bgColor: string;

  constructor(
    public dialogRef: MatDialogRef<FullPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fullPostData = data.post
    this.bgColor = data.color
  }

  ngOnInit(): void {
    this.fullPostData = this.data.post;
    this.bgColor = this.data.color
  }

  onCloseClick() {
    this.dialogRef.close();
  }
}
