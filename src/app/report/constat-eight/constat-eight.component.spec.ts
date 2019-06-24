import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatEightComponent } from './constat-eight.component';

describe('ConstatEightComponent', () => {
  let component: ConstatEightComponent;
  let fixture: ComponentFixture<ConstatEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
