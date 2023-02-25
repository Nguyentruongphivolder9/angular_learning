import { Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Website';
  parentMessage:string = 'Message Changed';

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }
}
