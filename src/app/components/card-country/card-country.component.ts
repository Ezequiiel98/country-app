import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent implements OnInit {

  @Input() nameCountry: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  
  seeDetailsCountry() {
    this._router.navigate(['/country', this.nameCountry]);
  }
}
