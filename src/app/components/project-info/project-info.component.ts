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
  private filteredTitles = new BehaviorSubject<any>(titles);
  public filteredTitles$ = this.filteredTitles.asObservable();
  private filteredOrgunits = new BehaviorSubject<any>(orgunits);
  public filteredOrgunits$ = this.filteredOrgunits.asObservable();
  private filteredCalendars = new BehaviorSubject<any>(calendars);
  public filteredCalendars$ = this.filteredCalendars.asObservable();

  constructor() {}

  filter(query: string, arr: string[], filteredItem: BehaviorSubject<any>) {
    let filtered = arr.filter((title: any) =>
      title.toLowerCase().startsWith(query.toLowerCase())
    );
    filteredItem.next(filtered);
  }
  filterTitles = (event: any) =>
    this.filter(event.query, titles, this.filteredTitles);

  filterOrgunits = (event: any) =>
    this.filter(event.query, orgunits, this.filteredOrgunits);

  filterCalendars = (event: any) =>
    this.filter(event.query, calendars, this.filteredCalendars);

  switchEditing = () => (this.editing = !this.editing);
}
