import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyProfilesComponent } from './manage-my-profiles.component';

describe('ManageMyProfilesComponent', () => {
  let component: ManageMyProfilesComponent;
  let fixture: ComponentFixture<ManageMyProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMyProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMyProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
