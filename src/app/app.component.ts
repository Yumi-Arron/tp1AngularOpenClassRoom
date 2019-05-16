import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [{
    title: "Mon premier post",
    content: "Content desription",
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: "Mon deuxieme post",
    content: "Content desription",
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: "Mon troisieme post",
    content: "Content desription",
    loveIts: 0,
    created_at: new Date()
  }];
}
