import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bool:boolean = true;

  // username: string | undefined;
  // textValues: string = "Values Click Event Worked";

  // buttonClick() {
  //   console.log('Button Click Event Worked');
  // }

  // onKeyup() {
  //   console.log(this.textValues);
  // }

  postTitle: string | undefined;
  postDetail: string | undefined;
  postImage: string | undefined;
  postURL: string | undefined;
  addBackground: boolean | undefined;

}
