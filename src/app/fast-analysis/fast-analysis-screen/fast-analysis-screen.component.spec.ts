import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastAnalysisScreenComponent } from './fast-analysis-screen.component';

describe('FastAnalysisScreenComponent', () => {
  let component: FastAnalysisScreenComponent;
  let fixture: ComponentFixture<FastAnalysisScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastAnalysisScreenComponent]
    });
    fixture = TestBed.createComponent(FastAnalysisScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
