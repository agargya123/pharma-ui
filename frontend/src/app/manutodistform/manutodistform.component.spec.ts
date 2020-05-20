import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutodistformComponent } from './manutodistform.component';

describe('ManutodistformComponent', () => {
  let component: ManutodistformComponent;
  let fixture: ComponentFixture<ManutodistformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutodistformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutodistformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
