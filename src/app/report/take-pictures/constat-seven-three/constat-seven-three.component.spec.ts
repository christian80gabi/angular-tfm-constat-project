import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatSevenThreeComponent } from './constat-seven-three.component';

describe('ConstatSevenThreeComponent', () => {
  let component: ConstatSevenThreeComponent;
  let fixture: ComponentFixture<ConstatSevenThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatSevenThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatSevenThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
