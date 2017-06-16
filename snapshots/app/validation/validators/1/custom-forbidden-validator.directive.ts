import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customForbiddenValidator(control: AbstractControl): ValidationErrors | null {

  if (control && control.value === "VALUE") {
    return { forbidden: true };
  }

  return null;
}