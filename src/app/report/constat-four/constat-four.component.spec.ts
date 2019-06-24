import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatFourComponent } from './constat-four.component';

describe('ConstatFourComponent', () => {
  let component: ConstatFourComponent;
  let fixture: ComponentFixture<ConstatFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
