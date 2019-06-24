import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatTwoComponent } from './constat-two.component';

describe('ConstatTwoComponent', () => {
  let component: ConstatTwoComponent;
  let fixture: ComponentFixture<ConstatTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
