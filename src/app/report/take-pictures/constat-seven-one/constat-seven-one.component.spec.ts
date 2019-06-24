import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatSevenOneComponent } from './constat-seven-one.component';

describe('ConstatSevenOneComponent', () => {
  let component: ConstatSevenOneComponent;
  let fixture: ComponentFixture<ConstatSevenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatSevenOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatSevenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
