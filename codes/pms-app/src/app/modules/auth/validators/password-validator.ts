import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordChecker = function (min: number, max: number): ValidatorFn {

    const passwordValidator: ValidatorFn = function (control: AbstractControl): ValidationErrors | null {

        const password = control.value
        if (!(password.length >= min && password.length <= max))
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

    return passwordValidator
}
