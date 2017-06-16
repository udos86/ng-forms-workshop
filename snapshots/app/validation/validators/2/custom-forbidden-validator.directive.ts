import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function customForbiddenValidator(forbiddenValue: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    if (control && control.value === forbiddenValue) {
      return { forbidden: true };
    }

    return null;
  }
}