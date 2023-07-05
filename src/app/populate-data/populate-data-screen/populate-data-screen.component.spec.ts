import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateDataScreenComponent } from './populate-data-screen.component';

describe('PopulateDataScreenComponent', () => {
  let component: PopulateDataScreenComponent;
  let fixture: ComponentFixture<PopulateDataScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopulateDataScreenComponent]
    });
    fixture = TestBed.createComponent(PopulateDataScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
