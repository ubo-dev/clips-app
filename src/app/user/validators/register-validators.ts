import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidators {
  static match(controlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const machingControl = group.get(matchingControlName);

      if (!control || !machingControl) {
        console.error("Form controls can not be found in the form group.");
        return { controlNotFound: false };
      }

      const error =
        control.value === machingControl.value ? null : { noMatch: true };

        machingControl.setErrors(error);

      return error;
    };
  }
}
