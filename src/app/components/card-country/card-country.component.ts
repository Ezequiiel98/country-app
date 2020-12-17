import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent implements OnInit {
  messageError = 'No Information';
  imgLoaded = false;

  @Input() dataCountry: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  
  seeDetailsCountry() {
    this._router.navigate(['/country', this.dataCountry.url]);
  }
  
  showImg() {
    this.imgLoaded = true;
  }
}
