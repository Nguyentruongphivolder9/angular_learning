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
  message:string | undefined;
  fromChildOutput:string | undefined;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit() {
    console.log(this.childComp)
    this.message = this.childComp.childMessage
  }

  reciveMessage($event: any){
    this.fromChildOutput = $event;
  }
}
