import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltListComponent } from './salt-list.component';

describe('SaltListComponent', () => {
  let component: SaltListComponent;
  let fixture: ComponentFixture<SaltListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
