import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAnalysisComponent } from './custom-analysis.component';

describe('CustomAnalysisComponent', () => {
  let component: CustomAnalysisComponent;
  let fixture: ComponentFixture<CustomAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAnalysisComponent]
    });
    fixture = TestBed.createComponent(CustomAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
