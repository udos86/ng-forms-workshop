import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormControlComponent } from './custom-form-control.component';

describe('CustomFormControlComponent', () => {
  let component: CustomFormControlComponent;
  let fixture: ComponentFixture<CustomFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
