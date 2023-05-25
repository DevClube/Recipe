import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlidComponent } from './home-slid.component';

describe('HomeSlidComponent', () => {
  let component: HomeSlidComponent;
  let fixture: ComponentFixture<HomeSlidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSlidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
