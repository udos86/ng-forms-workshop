import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSearchComponent } from './reactive-search.component';

describe('ReactiveSearchComponent', () => {
  let component: ReactiveSearchComponent;
  let fixture: ComponentFixture<ReactiveSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
