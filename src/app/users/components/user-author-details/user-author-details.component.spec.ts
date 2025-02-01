import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthorDetailsComponent } from './user-author-details.component';

describe('UserAuthorDetailsComponent', () => {
  let component: UserAuthorDetailsComponent;
  let fixture: ComponentFixture<UserAuthorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
