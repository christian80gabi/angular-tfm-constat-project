import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatFiveComponent } from './constat-five.component';

describe('ConstatFiveComponent', () => {
  let component: ConstatFiveComponent;
  let fixture: ComponentFixture<ConstatFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
