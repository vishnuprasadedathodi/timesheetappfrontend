import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldpasswordComponent } from './oldpassword.component';

describe('OldpasswordComponent', () => {
  let component: OldpasswordComponent;
  let fixture: ComponentFixture<OldpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
