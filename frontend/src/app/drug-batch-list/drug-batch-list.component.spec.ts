import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugBatchListComponent } from './drug-batch-list.component';

describe('DrugBatchListComponent', () => {
  let component: DrugBatchListComponent;
  let fixture: ComponentFixture<DrugBatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugBatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugBatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
