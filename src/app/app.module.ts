import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeneralComponent } from './components/general/general.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
