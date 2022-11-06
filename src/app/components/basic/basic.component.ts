import { Component, OnInit, NgModule } from '@angular/core';
import { CountryService } from 'src/app/services/countries';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  editing: boolean = false;
  filteredCountries: any[] = [];

  userInfo: any = {
    firstName: 'Reem',
    lastName: 'Shamia',
    groupNo: 112233,
    email: 'reem@gmail.com',
    nationality: { name: 'Palestinian', code: 'PS' },
    dob: '11/29/2022',
  };
  countries: any;
  constructor(public countryService: CountryService) {}

  async ngOnInit() {
    this.countries = await this.countryService.getCountries();
  }

  filterCountry(event: any) {
    let query = event.query;
    this.filteredCountries = this.countries.filter(
      (country: any) =>
        country.name.toLowerCase().indexOf(query.toLowerCase()) == 0
    );
  }
  switchEditing() {
    this.editing = !this.editing;
  }
}
