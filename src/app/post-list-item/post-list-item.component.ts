import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItem : {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  }

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    if(this.postItem.loveIts >= 1){
      this.postItem.loveIts--;
    }
    else {
      this.postItem.loveIts++;
    }
  }

  onDislike() {
    if(this.postItem.loveIts <= -1){
      this.postItem.loveIts++;
    }
    else {
      this.postItem.loveIts--;
    }
  }

}
