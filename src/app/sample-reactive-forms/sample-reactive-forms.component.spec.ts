import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReactiveFormsComponent } from './sample-reactive-forms.component';

describe('SampleReactiveFormsComponent', () => {
  let component: SampleReactiveFormsComponent;
  let fixture: ComponentFixture<SampleReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
