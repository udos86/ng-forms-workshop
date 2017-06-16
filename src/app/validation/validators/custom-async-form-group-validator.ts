import { FormGroup, ValidationErrors } from '@angular/forms';

export function customAsyncFormGroupValidator(formGroup: FormGroup): Promise<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
        resolve(null);
    });
}