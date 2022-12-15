import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelBooksComponent } from './adminpanel-books.component';

describe('AdminpanelBooksComponent', () => {
  let component: AdminpanelBooksComponent;
  let fixture: ComponentFixture<AdminpanelBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpanelBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpanelBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
