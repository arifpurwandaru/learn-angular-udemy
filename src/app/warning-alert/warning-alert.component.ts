import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    template: "<p> This is warning Message </p>",
    styles: [
        `
            p {
                padding: 20px;
                background-color: mistyrose;
                border: 1px solid red;
            }
        `
    ]
})
export class WarningAlert{

}