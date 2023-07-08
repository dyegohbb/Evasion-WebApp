import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateDataComponent } from './populate-data.component';

describe('PopulateDataComponent', () => {
  let component: PopulateDataComponent;
  let fixture: ComponentFixture<PopulateDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopulateDataComponent]
    });
    fixture = TestBed.createComponent(PopulateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
