import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent implements OnInit {
  messageError = 'No Information';

  @Input() dataCountry: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  
  seeDetailsCountry() {
    const urlCountry = this.dataCountry.name.replace(/\s\([^(*]*|\,/g, '').replace(/\s/g, '-');
    this._router.navigate(['/country', urlCountry]);
  }
}
