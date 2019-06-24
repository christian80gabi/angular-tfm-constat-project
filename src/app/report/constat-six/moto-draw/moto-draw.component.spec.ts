import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoDrawComponent } from './moto-draw.component';

describe('MotoDrawComponent', () => {
  let component: MotoDrawComponent;
  let fixture: ComponentFixture<MotoDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
