import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRawMaterialFromSupplierComponent } from './get-raw-material-from-supplier.component';

describe('GetRawMaterialFromSupplierComponent', () => {
  let component: GetRawMaterialFromSupplierComponent;
  let fixture: ComponentFixture<GetRawMaterialFromSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRawMaterialFromSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRawMaterialFromSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
