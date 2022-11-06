import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prime';
  index: number = 0;
  changeTab(indexTab:number) {
    console.log("clicked")
    console.log(indexTab)
    this.index = indexTab;
  }
}
