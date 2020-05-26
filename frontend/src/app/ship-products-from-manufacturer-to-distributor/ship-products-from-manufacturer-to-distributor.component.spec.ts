import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipProductsFromManufacturerToDistributorComponent } from './ship-products-from-manufacturer-to-distributor.component';

describe('ShipProductsFromManufacturerToDistributorComponent', () => {
  let component: ShipProductsFromManufacturerToDistributorComponent;
  let fixture: ComponentFixture<ShipProductsFromManufacturerToDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipProductsFromManufacturerToDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipProductsFromManufacturerToDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
