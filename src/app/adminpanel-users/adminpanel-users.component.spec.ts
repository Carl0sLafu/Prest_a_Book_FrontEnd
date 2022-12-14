import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelUsersComponent } from './adminpanel-users.component';

describe('AdminpanelUsersComponent', () => {
  let component: AdminpanelUsersComponent;
  let fixture: ComponentFixture<AdminpanelUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpanelUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpanelUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
