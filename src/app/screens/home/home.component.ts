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
  dataCountries: Country[] = [];
  isLoading = true;

  constructor(private _title: Title,
    private _countriesService: CountriesService) { }

  ngOnInit(): void {
    const allCountries = this._countriesService.getAllCountries();
    
    this._title.setTitle('CountryApp');

    if (allCountries.length === 0) {
      this._countriesService.fetchAllCountries()
        .subscribe(data => {
          this.dataCountries = data;
          this._countriesService.setAllCountries(data);
          this.isLoading = false;
        });
    } else {
      this.dataCountries = allCountries;
      this.isLoading = false;
    }
  }

 searchCountryByName(name: string) {
   this.dataCountries = this._countriesService.getCountryByName(name);
 }
 
 searchCountryByRegion(region: string) {
   const title = region === 'all' ? 'CountryApp': `${region} | CountryApp`;

   this._title.setTitle(title);
   
   this.dataCountries = this._countriesService.getCountriesByRegion(region);
 }
}
