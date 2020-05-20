import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchSaltsComponent } from './fetch-salts.component';

describe('FetchSaltsComponent', () => {
  let component: FetchSaltsComponent;
  let fixture: ComponentFixture<FetchSaltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchSaltsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchSaltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
