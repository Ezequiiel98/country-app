import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-region',
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.scss']
})
export class FilterRegionComponent implements OnInit {
  showOptions = false;
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europa', 'Oceania'];
  selectedRegion = 'all';
  @Output() regionEmitter: EventEmitter<string>;

  constructor() { 
    this.regionEmitter = new EventEmitter();
  } 

  ngOnInit(): void {
  }

  emitRegion(region: string) {
    console.log(region);
    this.showOptions = false;
    this.selectedRegion = region;
    this.regionEmitter.emit(region);
  }
}
