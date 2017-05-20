import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export function CustomEqualsValidatorFactory(equalsControlName: string) {

  return (control: AbstractControl): ValidationErrors | null => {

    let equalsControl = control.root.get(equalsControlName);

    if (control && equalsControl && control.value !== equalsControl.value) {
      return { equals: true };
    }

    return null;
  }
}

@Directive({
  selector: '[equals][ngModel], equals[formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CustomEqualsValidatorDirective), multi: true }
  ]
})
export class CustomEqualsValidatorDirective implements Validator {

  validatorFn: (control: AbstractControl) => ValidationErrors | null;

  constructor( @Attribute('equals') public equals: string) {

    this.validatorFn = CustomEqualsValidatorFactory(equals);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validatorFn(control);
  }
}
