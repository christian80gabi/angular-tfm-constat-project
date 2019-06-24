import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDrawComponent } from './car-draw.component';

describe('CarDrawComponent', () => {
  let component: CarDrawComponent;
  let fixture: ComponentFixture<CarDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
