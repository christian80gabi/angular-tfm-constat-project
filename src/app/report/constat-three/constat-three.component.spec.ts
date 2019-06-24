import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstatThreeComponent } from './constat-three.component';

describe('ConstatThreeComponent', () => {
  let component: ConstatThreeComponent;
  let fixture: ComponentFixture<ConstatThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstatThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstatThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
