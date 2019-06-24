import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatSevenTwoComponent } from './constat-seven-two.component';

describe('ConstatSevenTwoComponent', () => {
  let component: ConstatSevenTwoComponent;
  let fixture: ComponentFixture<ConstatSevenTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatSevenTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatSevenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
