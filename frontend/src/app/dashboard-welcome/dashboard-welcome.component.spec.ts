import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWelcomeComponent } from './dashboard-welcome.component';

describe('DashboardWelcomeComponent', () => {
  let component: DashboardWelcomeComponent;
  let fixture: ComponentFixture<DashboardWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
