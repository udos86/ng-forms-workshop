import { Directive, forwardRef, OnInit, Input, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export function customForbiddenValidator(forbidden: string) {

  return (control: AbstractControl): ValidationErrors | null => {

    if (control && control.value === forbidden) {
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
export class CustomForbiddenValidatorDirective implements Validator, OnInit {

  @Input() forbidden: string;

  validatorFn: (control: AbstractControl) => ValidationErrors | null;

  constructor(/*@Attribute('forbidden') public forbidden: string*/) { }

  ngOnInit() {
    this.validatorFn = customForbiddenValidator(this.forbidden);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatorFn(control);
  }
}
