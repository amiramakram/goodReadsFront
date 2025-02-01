import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthorCardComponent } from './user-author-card.component';

describe('UserAuthorCardComponent', () => {
  let component: UserAuthorCardComponent;
  let fixture: ComponentFixture<UserAuthorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
