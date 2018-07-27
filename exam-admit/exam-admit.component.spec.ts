import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAdmitComponent } from './exam-admit.component';

describe('ExamAdmitComponent', () => {
  let component: ExamAdmitComponent;
  let fixture: ComponentFixture<ExamAdmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamAdmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamAdmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
