import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDrugHistComponent } from './search-drug-hist.component';

describe('SearchDrugHistComponent', () => {
  let component: SearchDrugHistComponent;
  let fixture: ComponentFixture<SearchDrugHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDrugHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDrugHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
