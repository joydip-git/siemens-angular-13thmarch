import { Component } from "@angular/core";

@Component({
    selector: 'app-another',
    templateUrl: './another.component.html'
    // template: `
    // <h2>another component</h2>
    // <br>
    // <p>checking this can be bootstrapped or not</p>
    // `
})
export class AnotherComponent {
    message = 'checking this can be bootstrapped or not'
    updateMessage(newMessage: string) {
        this.message = newMessage
    }
}