import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../types/CountryInterface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {
  nameCountry: string;
  dataCountry: Country;
  borders: Country[];
  loading = true;
  
  constructor(private _activatedRoute: ActivatedRoute,
              private _countryService: CountriesService) { 
     
    this._activatedRoute.params.subscribe(data => {
      this.nameCountry = data?.name.replace(/\-/g, ' '); 
    })
  }

  ngOnInit(): void {
    const allCountries = this._countryService.getAllCountries();
    if(allCountries.length === 0) {
      this._countryService.fetchAllCountries().subscribe((data: Country[]) => {
        this._countryService.setAllCountries(data);
        [this.dataCountry] = this._countryService.getCountryByName(this.nameCountry);
        this.loading = false;
        console.log(this.nameCountry);
      });
    } else {
        [this.dataCountry] = this._countryService.getCountryByName(this.nameCountry);
        this.borders = this._countryService.getCountriesByCodes(this.dataCountry.borders);
        console.log(this.borders, this.dataCountry, this.nameCountry);
        this.loading = false;
    }
  }
}
