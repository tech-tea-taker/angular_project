import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAfterLoginComponent } from './employee-after-login.component';

describe('EmployeeAfterLoginComponent', () => {
  let component: EmployeeAfterLoginComponent;
  let fixture: ComponentFixture<EmployeeAfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAfterLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
