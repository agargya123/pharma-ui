import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureDrugsComponent } from './manufacture-drugs.component';

describe('ManufactureDrugsComponent', () => {
  let component: ManufactureDrugsComponent;
  let fixture: ComponentFixture<ManufactureDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
