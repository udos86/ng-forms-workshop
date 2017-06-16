import { Directive, forwardRef, OnChanges, Input, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function customForbiddenValidator(forbiddenValue: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    if (control && control.value === forbiddenValue) {
      return { forbidden: true };
    }

    return null;
  }
}

@Directive({
  selector: '[forbidden][ngModel], [forbidden][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CustomForbiddenValidatorDirective), multi: true }
  ]
})
export class CustomForbiddenValidatorDirective implements Validator, OnChanges {

  @Input() forbidden: string;

  validatorFn: (control: AbstractControl) => ValidationErrors | null;

  constructor(/*@Attribute('forbidden') public forbidden: string*/) { }

  ngOnChanges() {
    this.validatorFn = customForbiddenValidator(this.forbidden);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatorFn(control);
  }
}
