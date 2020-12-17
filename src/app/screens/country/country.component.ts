import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../types/CountryInterface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {
  countryUrl: string;
  dataCountry: Country;
  borders: Country[];
  loading = true;
  
  constructor(private _titleService: Title,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _countryService: CountriesService) { 
     
    this._activatedRoute.params.subscribe(data => {
      this.countryUrl = data?.url;
    });
  }
  
  getInformation() {
    [this.dataCountry] = this._countryService.getCountryByUrl(this.countryUrl);
    
    if(this.dataCountry) {
      this.borders = this._countryService.getCountriesByCodes(this.dataCountry.borders);
      this.loading = false;
      
      this._titleService.setTitle(`${this.dataCountry.name} | CountryApp`);
    } else {
      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    const allCountries = this._countryService.getAllCountries();
    
    if (allCountries.length === 0) {
      this._countryService.fetchAllCountries().subscribe((data: Country[]) => {
        this._countryService.setAllCountries(data);
        this.getInformation();
      });
    } else {
      this.getInformation();
    }
  }
}
