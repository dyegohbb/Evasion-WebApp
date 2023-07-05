import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAnalysisScreenComponent } from './custom-analysis-screen.component';

describe('CustomAnalysisScreenComponent', () => {
  let component: CustomAnalysisScreenComponent;
  let fixture: ComponentFixture<CustomAnalysisScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAnalysisScreenComponent]
    });
    fixture = TestBed.createComponent(CustomAnalysisScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
