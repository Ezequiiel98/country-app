import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value: string = '';

  @Output() searchCountryName: EventEmitter<string>;

  constructor() {
    this.searchCountryName = new EventEmitter();
  }

  ngOnInit(): void {
  }
 
  emitSearchCountryName(name: string) {
    const whiteSpaces: string[] = [' ', '\t', '\n'];
    const sanitizedName = name.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, '');
    const lastString = sanitizedName[sanitizedName.length - 1];
    
    this.value = sanitizedName;
    console.log(this.value);
    if (sanitizedName.trim().length > 0 && !whiteSpaces.includes(lastString)){
      this.searchCountryName.emit(sanitizedName);
    }
  }
}
