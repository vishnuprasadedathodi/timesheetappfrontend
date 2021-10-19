import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlydateComponent } from './yearlydate.component';

describe('YearlydateComponent', () => {
  let component: YearlydateComponent;
  let fixture: ComponentFixture<YearlydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
