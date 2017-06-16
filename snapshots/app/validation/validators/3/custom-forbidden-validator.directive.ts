import { Directive, forwardRef, OnInit, Input, Attribute } from '@angular/core';
import { ValidatorFn, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export function customForbiddenValidator(forbiddenValue: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    if (control && control.value === forbiddenValue) {
      return { forbidden: true };
    }

    return null;
  }
}

@Directive({
  selector: '[forbidden][ngModel], [forbidden][formControlName]'
})
export class CustomForbiddenValidatorDirective implements OnInit {

  @Input() forbidden: string;

  constructor() { }

  ngOnInit() { }
}
