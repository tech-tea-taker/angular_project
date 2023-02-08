import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDetailsComponent } from './get-all-details.component';

describe('GetAllDetailsComponent', () => {
  let component: GetAllDetailsComponent;
  let fixture: ComponentFixture<GetAllDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
