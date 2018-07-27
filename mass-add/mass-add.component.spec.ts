import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassAddComponent } from './mass-add.component';

describe('MassAddComponent', () => {
  let component: MassAddComponent;
  let fixture: ComponentFixture<MassAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
