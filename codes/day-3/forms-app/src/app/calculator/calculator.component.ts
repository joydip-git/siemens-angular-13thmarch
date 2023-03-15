import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})

export class CalculatorComponent {
    first = 0
    second = 0
    result = 0
    btnWidth = 150
    // updateFirst(firstNumber: string) {
    //     this.first = Number(firstNumber)
    // }
    // updateSecond(secondNumber: string) {
    //     this.second = Number(secondNumber)
    // }
    // calculate(firstNumber: string, secondNumber: string) {
    // calculate(ctrl: NgForm) {
    calculate() {
        // console.log(ctrl.form.controls)
        this.result = Number(this.first) + Number(this.second)
        // this.result = Number(ctrl.form.controls['firstCtrl'].value) + Number(ctrl.form.controls['secondCtrl'].value)
    }
}