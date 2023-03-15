import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[ngPassword]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordValidatorDirective,
        multi: true
    }]
})
export class PasswordValidatorDirective implements Validator {
    constructor() {
        console.log('Validator object created')
    }
    validate(control: AbstractControl): ValidationErrors | null {
        if (control.value) {
            const password = control.value
            if (!(password.length >= 6 && password.length <= 12))
                return {
                    length: {
                        message: 'password length should be between 6 and 12',
                        actual: `actual length is ${password.length}`
                    }
                }

            let hasUpper = false
            for (const char of password) {
                if (char >= 'A' && char <= 'Z') {
                    hasUpper = true
                    break
                }
            }

            if (!hasUpper)
                return {
                    uppercase: 'at leat one uppercase should be there'
                }

            let hasLower = false
            for (const char of password) {
                if (char >= 'a' && char <= 'z') {
                    hasLower = true
                    break
                }
            }

            if (!hasLower)
                return {
                    lowercase: 'at leat one lowercase should be there'
                }

            let hasNumber = false
            for (const char of password) {
                if (char >= '0' && char <= '9') {
                    hasNumber = true
                    break
                }
            }

            if (!hasNumber)
                return {
                    digit: 'at leat one digit should be there'
                }

            return null
        }
        else
            return null
    }
}