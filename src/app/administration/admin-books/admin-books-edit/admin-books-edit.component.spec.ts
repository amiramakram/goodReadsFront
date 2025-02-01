import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksEditComponent } from './admin-books-edit.component';

describe('AdminBooksEditComponent', () => {
  let component: AdminBooksEditComponent;
  let fixture: ComponentFixture<AdminBooksEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBooksEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBooksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
