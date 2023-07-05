import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaTrainScreenComponent } from './ia-train-screen.component';

describe('IaTrainScreenComponent', () => {
  let component: IaTrainScreenComponent;
  let fixture: ComponentFixture<IaTrainScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IaTrainScreenComponent]
    });
    fixture = TestBed.createComponent(IaTrainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
