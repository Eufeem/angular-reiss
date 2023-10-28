import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollQueryComponent } from './scroll-query.component';

describe('ScrollQueryComponent', () => {
  let component: ScrollQueryComponent;
  let fixture: ComponentFixture<ScrollQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
