import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCategoryDetailsComponent } from './user-category-details.component';

describe('UserCategoryDetailsComponent', () => {
  let component: UserCategoryDetailsComponent;
  let fixture: ComponentFixture<UserCategoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCategoryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
