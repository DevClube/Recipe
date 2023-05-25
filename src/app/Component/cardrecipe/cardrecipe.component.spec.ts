import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrecipeComponent } from './cardrecipe.component';

describe('CardrecipeComponent', () => {
  let component: CardrecipeComponent;
  let fixture: ComponentFixture<CardrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardrecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
