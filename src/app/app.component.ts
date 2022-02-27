import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe30an';
 
  show = true;
  color = '';
  appname = "ჩემი პირველი ანგულარი"
  videowid:any = 300;

  toggle(){
    this.show = !this.show;
  }

colred(){
     this.color = "red";
    }

    appvideo = "/assets/video/vid.webm"
    
    incrsize(){
      this.videowid += 50;
    }
  }

  