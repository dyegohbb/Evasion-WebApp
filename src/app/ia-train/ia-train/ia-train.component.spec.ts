import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaTrainComponent } from './ia-train.component';

describe('IaTrainComponent', () => {
  let component: IaTrainComponent;
  let fixture: ComponentFixture<IaTrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IaTrainComponent]
    });
    fixture = TestBed.createComponent(IaTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
