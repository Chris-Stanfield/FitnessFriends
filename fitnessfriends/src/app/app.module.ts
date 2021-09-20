import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { HelppageComponent } from './helppage/helppage.component';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationComponent } from './organization/organization.component';
import { GpsComponent } from './gps/gps.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpPageComponent,
    HelppageComponent,
    ProfileComponent,
    OrganizationComponent,
    GpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
