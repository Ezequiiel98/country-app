import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CountriesService } from '../../service/countries.service';
import { Country } from '../../types/CountryInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = true;
  dataCountriesWithPagination: Array<Country[]>;
  data: Country[] = [];
  indexPage = 0;
  valueInputSearch = '';

  constructor(private _title: Title,
              private _countriesService: CountriesService) { }

  setDataPagination(data: Country[], index?: number) {
    this.indexPage = index || index === 0 ? index : this.indexPage;
    this.dataCountriesWithPagination = this._countriesService.getDataCountriesWithPagination(data);
    this.data = this.dataCountriesWithPagination[this.indexPage];
  }
 
  ngOnInit(): void {
    const allCountries = this._countriesService.getAllCountries();

    this._title.setTitle('CountryApp');

    if (allCountries.length === 0) {
      this._countriesService.fetchAllCountries()
        .subscribe(data => {
          this._countriesService.setAllCountries(data);
          this.setDataPagination(data);
          this.isLoading = false;
        });
    } else {
      this.setDataPagination(allCountries);
      this.isLoading = false;
    }
  }

 searchCountryByName(name: string) {
   const dataCountries = this._countriesService.getCountryByName(name);
   this.valueInputSearch = name;
   this.setDataPagination(dataCountries, 0);
 }

 searchCountryByRegion(region: string) {
   const title = region === 'all' ? 'CountryApp' : `${region} | CountryApp`;
   const dataCountries = this._countriesService.getCountriesByRegion(region);
   
   this.valueInputSearch = '';
   this._title.setTitle(title);
   this.setDataPagination(dataCountries, 0);
 }

 onScrollDown() {
   if (this.dataCountriesWithPagination.length > this.indexPage) {
     this.isLoading =  true;
     this.indexPage++;
     this.data = this.data.concat(this.dataCountriesWithPagination[this.indexPage]);
     this.isLoading = false;
   }
 }
}
