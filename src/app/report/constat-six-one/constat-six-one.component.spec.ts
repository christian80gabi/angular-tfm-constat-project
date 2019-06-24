import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatSixOneComponent } from './constat-six-one.component';

describe('ConstatSixOneComponent', () => {
  let component: ConstatSixOneComponent;
  let fixture: ComponentFixture<ConstatSixOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatSixOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatSixOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
