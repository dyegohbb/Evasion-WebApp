import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastAnalysisComponent } from './fast-analysis.component';

describe('FastAnalysisComponent', () => {
  let component: FastAnalysisComponent;
  let fixture: ComponentFixture<FastAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastAnalysisComponent]
    });
    fixture = TestBed.createComponent(FastAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
