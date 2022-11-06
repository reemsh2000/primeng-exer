import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeneralComponent } from './components/general/general.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BasicComponent } from './components/basic/basic.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralComponent,
    UserDetailsComponent,
    BasicComponent,
    ProjectInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CheckboxModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
