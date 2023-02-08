import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAfterLoginComponent } from './admin-after-login.component';

describe('AdminAfterLoginComponent', () => {
  let component: AdminAfterLoginComponent;
  let fixture: ComponentFixture<AdminAfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAfterLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
