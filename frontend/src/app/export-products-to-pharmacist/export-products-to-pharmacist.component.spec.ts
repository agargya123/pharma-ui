import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportProductsToPharmacistComponent } from './export-products-to-pharmacist.component';

describe('ExportProductsToPharmacistComponent', () => {
  let component: ExportProductsToPharmacistComponent;
  let fixture: ComponentFixture<ExportProductsToPharmacistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportProductsToPharmacistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportProductsToPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
