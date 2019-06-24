import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatNineComponent } from './constat-nine.component';

describe('ConstatNineComponent', () => {
  let component: ConstatNineComponent;
  let fixture: ComponentFixture<ConstatNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
