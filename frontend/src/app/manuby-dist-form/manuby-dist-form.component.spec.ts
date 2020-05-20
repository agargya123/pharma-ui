import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManubyDistFormComponent } from './manuby-dist-form.component';

describe('ManubyDistFormComponent', () => {
  let component: ManubyDistFormComponent;
  let fixture: ComponentFixture<ManubyDistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManubyDistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManubyDistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
