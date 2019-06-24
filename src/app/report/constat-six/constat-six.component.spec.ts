import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatSixComponent } from './constat-six.component';

describe('ConstatSixComponent', () => {
  let component: ConstatSixComponent;
  let fixture: ComponentFixture<ConstatSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
