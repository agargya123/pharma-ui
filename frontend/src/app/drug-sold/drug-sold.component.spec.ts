import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugSoldComponent } from './drug-sold.component';

describe('DrugSoldComponent', () => {
  let component: DrugSoldComponent;
  let fixture: ComponentFixture<DrugSoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugSoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
