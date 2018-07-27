import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsEditComponent } from './parents-edit.component';

describe('ParentsEditComponent', () => {
  let component: ParentsEditComponent;
  let fixture: ComponentFixture<ParentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
