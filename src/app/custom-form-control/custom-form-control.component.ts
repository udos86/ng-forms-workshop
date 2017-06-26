import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomFormControlComponent), multi: true }
  ]
})
export class CustomFormControlComponent implements OnInit, ControlValueAccessor {

  private onChange: (value: any) => void = () => { };

  private onTouched: () => any = () => { };

  value: number;

  constructor() { }

  ngOnInit() { }

  writeValue(value: any): void {

    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  createRandomValue() {

    this.value = Math.random();
    this.onChange(this.value);
  }
}
