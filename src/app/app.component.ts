import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prime';
  index: number = 0;
  changeTab(indexTab: number) {
    this.index = indexTab;
  }
  handleChange(e: any) {
    this.index = e.index;
  }
}
