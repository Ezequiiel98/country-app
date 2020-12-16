import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { CountryComponent } from './screens/country/country.component';
import { SearchComponent } from './components/search/search.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { FilterRegionComponent } from './components/filter-region/filter-region.component';
import { NoInformationPipe } from './pipes/no-information.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    SearchComponent,
    CardCountryComponent,
    FilterRegionComponent,
    NoInformationPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
