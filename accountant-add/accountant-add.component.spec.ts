import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantAddComponent } from './accountant-add.component';

describe('AccountantAddComponent', () => {
  let component: AccountantAddComponent;
  let fixture: ComponentFixture<AccountantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
