import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatOneComponent } from './constat-one.component';

describe('ConstatOneComponent', () => {
  let component: ConstatOneComponent;
  let fixture: ComponentFixture<ConstatOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
