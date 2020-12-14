import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-region',
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.scss']
})
export class FilterRegionComponent implements OnInit {
  showOptions = false;

  constructor() { }

  ngOnInit(): void {
  }

}
