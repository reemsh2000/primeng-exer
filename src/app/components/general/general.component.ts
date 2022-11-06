import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from 'src/app/services/countries';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  providers: [CountryService],
})
export class GeneralComponent {
  @Output() nextTab = new EventEmitter();
  next() {
    this.nextTab.emit(1);
  }
}
