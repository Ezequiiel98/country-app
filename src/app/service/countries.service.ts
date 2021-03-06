import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Country } from '../types/CountryInterface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private allCountries: Country[] = [];

  constructor(private _http: HttpClient) { }

  getQuery(query: string) {
    query = query[0] === '/' ? query.substring(1, query.length) : query;

    const url = `https://restcountries.eu/rest/v2/${query}`;

    return this._http.get(url);
  }

  fetchAllCountries(countryName: string = 'all') {
    const url = countryName === 'all' ? `/${countryName}` : `/countryName/${countryName}`;
    return this.getQuery(url).pipe(
      map((data: any) => data.map(
        ({ name, population, region, capital, flag, nativeName,
           subregion, topLevelDomain, currencies,
           borders, languages, alpha3Code: code,
        }) => {
          const urlCountry = `${name.replace(/\s\([^(*]*|\,/g, '').replace(/\s/g, '-')}-${code}`.toLowerCase();
          
          return {
           name: name.replace(/-/, ' '), population, region, capital, flag, nativeName,
           subregion, topLevelDomain: topLevelDomain[0], currencies,
           borders, languages, code, url: urlCountry,
          };
        }
      )));
  }

  getDataCountriesWithPagination(data: Country[]) {
    let countItem = 0;
    let countPage = 0;
    let temp: Country[] = [];
    const result: Array<Country[]> = [];
    const ITEMS_PER_PAGE = 10;
 
    data.forEach((e, index) => {
      temp.push(e);
      countItem++;

      if (countItem > (ITEMS_PER_PAGE - 1)) {
        result.push(temp);
        temp = [];
        countItem = 0;
        countPage++;
      }

      if (data.length - 1 === index) {
        result.push(temp);
      }
    });

    return result;
  }

  setAllCountries(data: Country[]) {
    this.allCountries = data;
  }
  
  getAllCountries() {
    return this.allCountries;
  }

  getCountryByName(name: string) {
    name = name.toLowerCase().trim();
    
    const regex = new RegExp(`^${name}`);
    const dataCountries: Country[] = this.getAllCountries();
    return dataCountries.filter(country => regex.test(country.name.replace(/[\,|-]/g, '').toLowerCase().trim()));
  }

  getCountriesByCodes(codes: string[]) {
    const dataCountries: Country[] = this.getAllCountries();
    return dataCountries.filter(country => codes.includes(country.code));
  }

  getCountriesByRegion(region: string = 'all') {
    const dataCountries: Country[] = this.getAllCountries();
    
    if(region.toLowerCase() === 'all') {
      return dataCountries;
    }

    return dataCountries.filter(country => region.toLowerCase() === country.region.toLowerCase());
  }

  getCountryByUrl(url: string) {
    const dataCountries: Country[] = this.getAllCountries();

    return dataCountries.filter(country => url === country.url);
  }
}
