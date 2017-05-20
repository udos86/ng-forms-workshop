import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDynamicFormsComponent } from './sample-dynamic-forms.component';

describe('SampleDynamicFormsComponent', () => {
  let component: SampleDynamicFormsComponent;
  let fixture: ComponentFixture<SampleDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
