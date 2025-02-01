import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookDetailsComponent } from './user-book-details.component';

describe('UserBookDetailsComponent', () => {
  let component: UserBookDetailsComponent;
  let fixture: ComponentFixture<UserBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
