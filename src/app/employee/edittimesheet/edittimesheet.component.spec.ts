import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittimesheetComponent } from './edittimesheet.component';

describe('EdittimesheetComponent', () => {
  let component: EdittimesheetComponent;
  let fixture: ComponentFixture<EdittimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
