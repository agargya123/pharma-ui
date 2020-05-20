import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductsFromPharmacistComponent } from './buy-products-from-pharmacist.component';

describe('BuyProductsFromPharmacistComponent', () => {
  let component: BuyProductsFromPharmacistComponent;
  let fixture: ComponentFixture<BuyProductsFromPharmacistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyProductsFromPharmacistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyProductsFromPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
