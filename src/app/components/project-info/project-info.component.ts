import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CountryService } from 'src/app/services/countries';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  editing: boolean = false;
  private filteredTitles = new BehaviorSubject<any>([]);
  public filteredTitles$ = this.filteredTitles.asObservable();
  private filteredOrgunits = new BehaviorSubject<any>([]);
  public filteredOrgunits$ = this.filteredOrgunits.asObservable();
  private filteredCalendars = new BehaviorSubject<any>([]);
  public filteredCalendars$ = this.filteredCalendars.asObservable();

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
  titles = [
    'Project Engineer - Civil',
    'Project Engineer - E/M',
    'Software Engineer',
  ];
  orgunits = ['M01031', 'M01032', 'M01032', 'M01033'];
  calendars = ['FCW 8 Plus 1', 'FCW 8 Plus 2', 'FCW 9', 'FCW 10'];
  constructor(public countryService: CountryService) {}

  async ngOnInit() {}

  filterTitles(event: any) {
    let query = event.query;
    console.log('befo', this.titles, query);
    let titles = this.titles.filter((title: any) =>
      title.toLowerCase().startsWith(query.query)
    );
    console.log(this.titles);
    this.filteredTitles.next(titles);
  }
  filterOrgunits(event: any) {
    let query = event.query.toLowerCase();
    let orgunits = this.orgunits.filter((title: any) =>
      title.toLowerCase().startsWith(query.query)
    );
    this.filteredOrgunits.next(orgunits);
  }
  filterCalendars(event: any) {
    let query = event.query.toLowerCase();
    let calendars = this.calendars.filter((title: any) =>
      title.toLowerCase().startsWith(query.query)
    );
    this.filteredCalendars.next(calendars);
  }
  switchEditing() {
    this.editing = !this.editing;
    console.log(this.userInfo);
  }
}
