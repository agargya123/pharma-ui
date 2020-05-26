import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveProductsFromManufacturerByDistributorComponent } from './receive-products-from-manufacturer-by-distributor.component';

describe('ReceiveProductsFromManufacturerByDistributorComponent', () => {
  let component: ReceiveProductsFromManufacturerByDistributorComponent;
  let fixture: ComponentFixture<ReceiveProductsFromManufacturerByDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveProductsFromManufacturerByDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveProductsFromManufacturerByDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
