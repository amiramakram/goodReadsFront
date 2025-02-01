import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardAllComponent } from './book-card.component';

describe('BookCardAllComponent', () => {
  let component: BookCardAllComponent;
  let fixture: ComponentFixture<BookCardAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCardAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCardAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
