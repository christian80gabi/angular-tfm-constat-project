import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatFourOneComponent } from './constat-four-one.component';

describe('ConstatFourOneComponent', () => {
  let component: ConstatFourOneComponent;
  let fixture: ComponentFixture<ConstatFourOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatFourOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatFourOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
