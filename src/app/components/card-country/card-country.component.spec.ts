import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCountryComponent } from './card-country.component';

describe('CardCountryComponent', () => {
  let component: CardCountryComponent;
  let fixture: ComponentFixture<CardCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
