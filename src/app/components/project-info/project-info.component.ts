import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { titles, orgunits, calendars } from '../../../assets/data';
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
  editing: boolean = false;
  directStatus = ['direct', 'indirect'];
  contractTypes = ['Monthly', 'Daily', 'Lumpump'];
  userInfo: any = {
    title: 'Project Engineer II - Civil',
    badgeNo: '11456',
    orgunit: 'M01031',
    calendar: 'FCW 8 Plus 1',
    contractType: 'Monthly',
    direct: 'Indirect',
  };
  private filtered = new BehaviorSubject<any>({
    titles,
    orgunits,
    calendars,
  });
  public filtered$ = this.filtered.asObservable();

  constructor() {}

  filter(query: string, arr: string[]) {
    let filtered = arr.filter((title: any) =>
      title.toLowerCase().startsWith(query.toLowerCase())
    );
    this.filtered.next(filtered);
  }
  filterTitles = (event: any) => this.filter(event.query, titles);

  filterOrgunits = (event: any) => this.filter(event.query, orgunits);

  filterCalendars = (event: any) => this.filter(event.query, calendars);

  switchEditing = () => (this.editing = !this.editing);
}
