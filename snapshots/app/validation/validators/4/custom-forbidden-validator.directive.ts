import { Directive, forwardRef, OnChanges, Input, Attribute, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

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

  validatorFn: ValidatorFn;

  constructor(/*@Attribute('forbidden') public forbidden: string*/) { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['forbidden']) {

      this.validatorFn = customForbiddenValidator(this.forbidden);

    } else {

      this.validatorFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatorFn(control);
  }
}
