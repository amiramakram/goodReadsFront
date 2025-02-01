import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorsEditComponent } from './admin-authors-edit.component';

describe('AdminAuthorsEditComponent', () => {
  let component: AdminAuthorsEditComponent;
  let fixture: ComponentFixture<AdminAuthorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthorsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuthorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
