import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelLoansComponent } from './adminpanel-loans.component';

describe('AdminpanelLoansComponent', () => {
  let component: AdminpanelLoansComponent;
  let fixture: ComponentFixture<AdminpanelLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpanelLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpanelLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
